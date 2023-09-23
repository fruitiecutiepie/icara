import functions = require('firebase-functions');
import { google } from 'googleapis';

import { client_id, client_secret, redirect_uri, refresh_token } from '../../../../2_admin/security/functions/gapi_oauth_token.json'

exports.addEmailToSheets = functions.https.onRequest(async (req: any, res: any) => {
  try {
    // CORS
    // Browsers will block web apps e.g. localhost or some other domain from making requests to servers they don't have...
    // Allows any origin to make a request to this domain.
    res.set("Access-Control-Allow-Origin", "*");
    // Handle browsers preflight requests
    if (req.method === "OPTIONS") {
      res.set("Access-Control-Allow-Methods", "POST");
      res.set("Access-Control-Allow-Headers", "Content-Type");
      res.set("Access-Control-Max-Age", "3600");
      res.status(204).send();
      return;
    }
    
    const email = req.body.email.trim().toLowerCase();
    const full_name = req.body.full_name;

    const auth = new google.auth.OAuth2(
      client_id,
      client_secret,
      redirect_uri,
    );

    auth.setCredentials({
      refresh_token: refresh_token,
    })

    const sheets = google.sheets({ version: 'v4', auth });
    
    const spreadsheetId = '1G3kEnc62ok5vvm5cEVDgasc_fq7jDSRZyxXffWrQfKQ';
    const range = 'A:B'; // First two columns
    
    const values = [[email, full_name]];
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values;
    if (rows) {
      for (let i = 0; i < rows.length; i++) {
        const existingEmail = rows[i][0];
        const existingFullName = rows[i][1];
        if (existingEmail === email) {
          if (full_name && !existingFullName) {
            await sheets.spreadsheets.values.update({
              spreadsheetId,
              range: `B${i + 1}:B${i + 1}`,
              valueInputOption: 'RAW',
              requestBody: { values: [[full_name]] },
            });
            functions.logger.info("Full name added.");
            res.status(200).send('Full name added.');
            return;
          }
          else {
            functions.logger.info("Record already exists");
            res.status(200).send('Record already exists.');
            return;
          }
        }
      }
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: { values }
    });
    
    functions.logger.info("New record added");
    res.status(200).send('New record added.');
  } catch (error) {
    functions.logger.error("Error adding record", error);
    res.status(500).send(error);
  }
});