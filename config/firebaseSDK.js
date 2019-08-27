import firebase from 'firebase';

class FirebaseSDK {
  constructor() {
    if (!firebase.apps.length) {
      //avoid re-initializing
      firebase.initializeApp({
        apiKey: 'AIzaSyD-324vOEZexS8HM91CsK50nuev5nBJRL0',
        authDomain: '<your-auth-domain>',
        databaseURL: 'https://vamos-juntas-2ce15.firebaseio.com/',
        projectId: 'vamos-juntas-2ce15',
        storageBucket: '<your-storage-bucket>.appspot.com',
        messagingSenderId: '<your-sender-id>'
      });
    }
  }
  login = async (user, success_callback, failed_callback) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(success_callback, failed_callback);
  };
}

const firebaseSDK = new FirebaseSDK();
export default firebaseSDK;