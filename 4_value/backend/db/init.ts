import brands from './meta.item.brand.json';
import categories from './meta.item.category.json'
import items from './item.json'
import { db } from '../firebaseAdminInit'

(() => {
  const batch = db.batch();

  batch.set(db.collection('meta').doc('item'), {
    brands: brands,
    categories: categories
  });

  items.forEach((item) => {
    batch.set(db.collection('item').doc(), item);
  })

  batch.commit()
    .then(() => {
      console.log("Database initialised successfully!");
    })
    .catch(error => {
      console.error("Error initialiasing database: ", error);
    });
})();