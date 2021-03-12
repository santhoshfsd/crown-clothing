import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from './../../redux/cart/cart.selectors'
import CheckoutItem from '../../component/checkout-item/checkout.item.component'
import StripeCheckoutButton from './../../component/stripe-button/stripe-button.component'
const CheckoutPage = ({ cartItems, cartTotal }) => {
    return <div className="checkout-page">

        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(item => <CheckoutItem key={item.id} cartItem={item}>
            </CheckoutItem>)
        }
        <div className="total">
            <span> Total : {cartTotal}</span>
        </div>
        <div className="test-warning">
        * please use the following card details for the payments* 
        <br />
        4242 4242 4242  4242   &nbsp;&nbsp;     MM/YY CVV
        <hr />
        any future month and year
        anty value
        </div>
        <StripeCheckoutButton price={cartTotal}></StripeCheckoutButton>
    </div >
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);