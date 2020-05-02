import React from 'react';
import { MenuItemContainer, ImageContainer, ContentContainer, TitleContainer, SubTitleContainer } from './menu-item.styles';
import {withRouter} from 'react-router-dom'

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <MenuItemContainer size={size}
         onClick={() => history.push(`${match.url}${linkUrl}`)}>    
        <ImageContainer  className='background-image' imageUrl={imageUrl} />
    <ContentContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <SubTitleContainer>SHOP NOW</SubTitleContainer>
    </ContentContainer>
  </MenuItemContainer>
)

export default withRouter(MenuItem);

