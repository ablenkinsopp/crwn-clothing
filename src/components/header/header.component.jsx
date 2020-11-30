import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = () => {
    const currentUser = useSelector(state => state.user.currentUser)
    const cartHidden = useSelector(state => state.cart.hidden)
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