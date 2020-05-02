import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions'

import { CollectionItemContainer, ImageContainer, CollectionFooterContainer, NameText, PriceText, CustomButtonContainer } from './collection-item.styles';

const CollectionItem = ({item, addItem}) => {
 const { name, price, imageUrl } = item;
return(
    <CollectionItemContainer>
        <ImageContainer className='image' imageUrl={imageUrl} />
        <CollectionFooterContainer>
            <NameText>{name}</NameText>
            <PriceText>{price}</PriceText>
        </CollectionFooterContainer>
        <CustomButtonContainer onClick={() => addItem(item)} inverted='true'>Add to cart</CustomButtonContainer>
    </CollectionItemContainer>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);