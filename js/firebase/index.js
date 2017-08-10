import firebase from 'firebase'

// Initialize Firebase
let config = {
  apiKey: 'AIzaSyBeHDcozwnPOK6rOiRIqTWC0MXOh1zfCwk',
  authDomain: 'thehashhub-do.firebaseapp.com',
  databaseURL: 'https://thehashhub-do.firebaseio.com',
  projectId: 'thehashhub-do',
  storageBucket: '',
  messagingSenderId: '179724498282',
}
firebase.initializeApp(config)

export default firebase
export const auth = firebase.auth()
export const db = firebase.database()
export const users = db.ref('users')
