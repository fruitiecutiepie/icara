import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.web.icara',
  appName: 'Icara',
  webDir: 'dist',
  backgroundColor: '#EEEEEE',
  android: {
    path: '../android',
  },
  ios: {
    path: '../ios',
    scheme: 'Icara',
  },
  server: {
    androidScheme: 'https',
  },
};

export default config;
