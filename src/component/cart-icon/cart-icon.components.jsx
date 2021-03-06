import './cart-icon.styles.scss'
import React from 'react'
import { ReactComponent as ShoopingIcon } from './../../asset/shopping-bag.svg'


const CartIcon = () => {
    return <div className="cart-icon">
        <ShoopingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
}

export default CartIcon;