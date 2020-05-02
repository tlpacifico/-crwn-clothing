import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';

import { 
        CheckoutItemContainer,
        RemoveButtonContainer,
        QuantityContainer,
        ArrowContainer,
        With23Container,
        ImageContainer,
        ValueTextContainer } from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem}) =>  {
const { name, imageUrl, price, quantity } = cartItem;
return (
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt='item' />
        </ImageContainer>
        <With23Container>{name}</With23Container>       
        <QuantityContainer>
            <ArrowContainer onClick={() => removeItem(cartItem)}>&#10094;</ArrowContainer>
            <ValueTextContainer> {quantity}</ValueTextContainer> 
            <ArrowContainer onClick={() =>addItem(cartItem)}>&#10095;</ArrowContainer>
        </QuantityContainer>
        <With23Container>{price}</With23Container>
        <RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
)};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);