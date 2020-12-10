import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
} from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';

const Header = () => {
	const currentUser = useSelector(selectCurrentUser);
	const cartHidden = useSelector(selectCartHidden);
	const dispatch = useDispatch();

	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<Logo />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to="/shop">SHOP</OptionLink>
				<OptionLink to="/shop">
					CONTACT
				</OptionLink>
				{currentUser ? (
					<OptionLink
						as="div"
						onClick={() =>
							dispatch(
								signOutStart()
							)
						}
					>
						SIGN OUT
					</OptionLink>
				) : (
					<OptionLink to="/auth">
						SIGN IN
					</OptionLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{!cartHidden && <CartDropdown />}
		</HeaderContainer>
	);
};

export default Header;
