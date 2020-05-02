import React from 'react';
import { CartItemContrainer, ItemDetailsContainer, PriceContainer, NameContainer, ImgContainer } from  './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity }}) => (
<CartItemContrainer>
    <ImgContainer src={imageUrl} alt='item' />
    <ItemDetailsContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>
            {quantity} x ${price}
      </PriceContainer>
    </ItemDetailsContainer>
</CartItemContrainer>
);

export default CartItem;