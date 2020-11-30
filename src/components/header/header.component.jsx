import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

const Header = () => {
    const currentUser = useSelector(selectCurrentUser)
    const cartHidden = useSelector(selectCartHidden)
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>SHOP</Link>
                <Link to='/shop' className='option'>CONTACT</Link>
                {
                    currentUser ?
                    <div onClick={() => auth.signOut()} className='option'>SIGN OUT</div> :
                    <Link to='/auth' className='option'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {!cartHidden && <CartDropdown />}
        </div>
    )
}

export default Header