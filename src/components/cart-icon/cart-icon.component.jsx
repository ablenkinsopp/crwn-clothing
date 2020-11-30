import { useDispatch } from 'react-redux'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss'

const CartIcon = () => {
    const dispatch = useDispatch();

    return (
        <div onClick={() => dispatch(toggleCartHidden())} className='cart-icon'>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon