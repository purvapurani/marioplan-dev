import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDUr4rCpvFbaOze2voTAaNqv_jOdjyhMHE",
    authDomain: "marioplan-purva.firebaseapp.com",
    databaseURL: "https://marioplan-purva.firebaseio.com",
    projectId: "marioplan-purva",
    storageBucket: "marioplan-purva.appspot.com",
    messagingSenderId: "161832508889"
};
firebase.initializeApp(config);
// firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;