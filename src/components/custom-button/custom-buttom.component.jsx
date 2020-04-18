import React from 'react';
import './custom-buttom.styles.scss';

const CustomButton = ({children, isGoogleSignIn, ...ortherProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ' '} custom-button`} {...ortherProps}>
        {children}
    </button>
)

export default CustomButton;