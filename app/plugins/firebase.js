import firebase from 'firebase/app'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'sample',
    authDomain: 'sample',
    databaseURL: 'sample',
    projectId: 'sample',
    storageBucket: 'sample',
    messagingSenderId: 'sample'
  })
}

const db = firebase.firestore()
export default db
