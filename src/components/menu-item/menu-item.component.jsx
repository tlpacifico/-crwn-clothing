import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title, subtitle, imageUrl, size}) => (
    <div className={`${size} menu-item`} >    
        <div className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`
        }} 
       />
    <div className='content'>
      <div className='title'>{title.toUpperCase()}</div>
        <span className='subtitle'>{subtitle.toUpperCase()}</span>
    </div>
  </div>
)

export default MenuItem;

