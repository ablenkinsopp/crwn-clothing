import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import { useEffectOnce } from 'react-use';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import AuthPage from './pages/auth/auth.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils'


function App() {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth, { from: 'app' })

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                })
            } else {
                setCurrentUser(userAuth)
            }
        })
        return () => {
            unsubscribeFromAuth()
        }
    }, [])

    return (
        <div>
            <Header currentUser={currentUser} />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route path='/auth' component={AuthPage} />
            </Switch>
        </div>
    )
}

export default App;
