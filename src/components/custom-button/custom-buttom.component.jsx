import React from 'react';
import './custom-buttom.styles.scss';

const CustomButton = ({children, ...ortherProps}) => (
    <button className="custom-button" {...ortherProps}>
        {children}
    </button>
)

export default CustomButton;