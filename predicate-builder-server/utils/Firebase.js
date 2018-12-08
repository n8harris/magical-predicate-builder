import * as firebase from 'firebase';

class Firebase {
  constructor(fb, url, projectId) {
    this.dbUrl = url || "magical-predicate-builder.firebaseapp.com";
    this.projectId = projectId || "magical-predicate-builder";
    this.fb = fb || (!firebase.apps.length && firebase.initializeApp({
      databaseURL: this.dbUrl,
      projectId: this.projectId,
    }).firestore());
  }

  getCollections(collections) {
    let promises = [];
    collections.forEach((collection) => {
      promises.push(this.getCollection(collection));
    });
    return Promise.all(promises);
  }

  getCollection(collectionName) {
    return new Promise((resolve) => {
      this.fb.collection(collectionName).get().then((result) => {
        let items = [];
        result.forEach((item) => items.push(item.data()));
        resolve(items);
      });
    });
  }

  getPredicates() {
    return this.getCollection('predicates');
  }

  getOperators() {
    return this.getCollection('operators');
  }
}

export default Firebase;