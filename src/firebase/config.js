// import {initializeApp} from 'firebase/app'
// import {getFirestore} from 'firebase/firebase'
// import firebase from 'firebase/compat/app'

// const firebaseConfig = {
//     apiKey: "AIzaSyCKuD06v1VrrGACpjMvDZuERv1KLo2WnOU",
//     authDomain: "modern-react-app-87977.firebaseapp.com",
//     projectId: "modern-react-app-87977",
//     storageBucket: "modern-react-app-87977.appspot.com",
//     messagingSenderId: "756070800373",
//     appId: "1:756070800373:web:ec5cd252da3940d21f5ebc"
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// initializeApp(firebaseConfig)

// const db=getFirestore()
// export{db}

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCKuD06v1VrrGACpjMvDZuERv1KLo2WnOU",
    authDomain: "modern-react-app-87977.firebaseapp.com",
    projectId: "modern-react-app-87977",
    storageBucket: "modern-react-app-87977.appspot.com",
    messagingSenderId: "756070800373",
    appId: "1:756070800373:web:ec5cd252da3940d21f5ebc"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };