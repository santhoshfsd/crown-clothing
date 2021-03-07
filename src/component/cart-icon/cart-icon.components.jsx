import './cart-icon.styles.scss'
import React from 'react'
import { ReactComponent as ShoopingIcon } from './../../asset/shopping-bag.svg'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoopingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
}
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});


const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);