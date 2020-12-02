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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return
    }

    const userRef = firestore.doc(`/users/${userAuth.uid}`)

    const snapshot = await userRef.get()
    
    if (!snapshot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        if (displayName || additionalData.displayName) {
            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            } catch (error) {
                console.log('error creating user', error.message)
            }
        }
    }

    return userRef
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    
    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    })

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    }, {})
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase