import { useEffect, useState } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import AuthPage from './pages/auth/auth.component';

import { setCurrentUser } from './redux/user/user.actions'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

function App() {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user.currentUser)

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot(snapshot => {
                    dispatch(setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    }))
                })
            } else {
                dispatch(setCurrentUser(userAuth))
            }
        })
        return () => {
            unsubscribeFromAuth()
        }
    }, [dispatch])

    console.log('currentUser', currentUser)

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route path='/auth' render={() => 
                    currentUser ? (
                        <Redirect to='/' />
                    ) : (
                        <AuthPage />
                    )
                } />
            </Switch>
        </div>
    )
}

export default App;
