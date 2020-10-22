import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCEi3jF_DtGWXGFn-fUSGc13ppNfkrktLg",
    authDomain: "discord-clone-1eefa.firebaseapp.com",
    databaseURL: "https://discord-clone-1eefa.firebaseio.com",
    projectId: "discord-clone-1eefa",
    storageBucket: "discord-clone-1eefa.appspot.com",
    messagingSenderId: "930502220977",
    appId: "1:930502220977:web:07a3c5c05f687c96d4d690",
    measurementId: "G-JMBYLWX5ZS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db