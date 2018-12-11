import firebase from "firebase";

/**
 * "Singleton" with helper methods for accessing firebase/firestore collections
 */
const Firebase = {
  initFirebase(url, pId) {
    if (!firebase.apps.length) {
      const dbUrl = url || "magical-predicate-builder.firebaseapp.com";
      const projectId = pId || "magical-predicate-builder";
      this.fb = firebase.initializeApp({
        databaseURL: dbUrl,
        projectId
      }).firestore();
    }
  },
  getCollections(collections) {
    const promises = [];
    collections.forEach(collection => {
      promises.push(Firebase.getCollection(collection));
    });
    return Promise.all(promises);
  },
  getCollection(collectionName) {
    return new Promise(resolve => {
      this.fb.collection(collectionName).get().then(result => {
        const items = [];
        result.forEach(item => items.push(item.data()));
        resolve(items);
      });
    });
  }
};

export default Firebase;