import { Route, Redirect, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import AuthPage from './pages/auth/auth.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { selectCurrentUser } from './redux/user/user.selectors';

function App() {
	const currentUser = useSelector(selectCurrentUser);

	return (
		<div>
			<Header />
			<Switch>
				<Route
					exact
					path="/"
					component={HomePage}
				/>
				<Route
					path="/shop"
					component={ShopPage}
				/>
				<Route
					path="/auth"
					render={() =>
						currentUser ? (
							<Redirect to="/" />
						) : (
							<AuthPage />
						)
					}
				/>
				<Route
					exact
					path="/checkout"
					component={CheckoutPage}
				/>
			</Switch>
		</div>
	);
}

export default App;
