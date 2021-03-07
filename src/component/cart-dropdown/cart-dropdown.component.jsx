import React from 'react'
import './cart-dropdown.styles.scss'
import CartItem from './../cart-item/cart-item.component'
import CustomButton from './../custom-button/custom-button.component'
import { connect } from 'react-redux'

const CartDropdown = ({ cartItems }) => {
    return <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(item => {
                return <CartItem id={item.id} item={item} />
            })}
        </div>
        <CustomButton type="button"> Checkout</CustomButton>
    </div>
}

const mapStateToProps = ({ cart: cartItems }) => ({
    cartItems: cartItems
})

export default connect(mapStateToProps)(CartDropdown);