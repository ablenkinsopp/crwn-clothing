import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDl--yppDm5_DN8M3D30xD0ufBbCBFJ3Pg",
    authDomain: "crwn-db-387f3.firebaseapp.com",
    databaseURL: "https://crwn-db-387f3.firebaseio.com",
    projectId: "crwn-db-387f3",
    storageBucket: "crwn-db-387f3.appspot.com",
    messagingSenderId: "285938661742",
    appId: "1:285938661742:web:f4e34389c681e6197ca97f"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase