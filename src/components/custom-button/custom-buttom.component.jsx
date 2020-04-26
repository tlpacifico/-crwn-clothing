import React from 'react';
import './custom-buttom.styles.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...ortherProps}) => (
    <button className={`${inverted ? 'inverted' : ' '}
        ${isGoogleSignIn ? 'google-sign-in' : ' '}
        custom-button`} {...ortherProps}>
        {children}
    </button>
)

export default CustomButton;