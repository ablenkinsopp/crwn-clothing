import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import AuthPage from './pages/auth/auth.component';

import { auth } from './firebase/firebase.utils'

function App() {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return function cleanup() {
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
