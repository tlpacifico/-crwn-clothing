import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toogleCartHidden } from '../../redux/cart/cart.actions';
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, ButtonContainer } from './cart-dropdown.styles'

const CartDropdown = ({cartItems, history, dispatch }) => (
    <CartDropdownContainer>       
        <CartItemsContainer>
        { cartItems.length ?
            cartItems.map(item => (
                <CartItem key={item.id} item={item} />
        )) 
        : (
            <EmptyMessageContainer> Your cart is empty</EmptyMessageContainer>
          )}
    </CartItemsContainer>
    <ButtonContainer onClick ={() => {
        history.push('/checkout');
        dispatch(toogleCartHidden());
    }
}>GO TO CHECKOUT</ButtonContainer>
</CartDropdownContainer>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));