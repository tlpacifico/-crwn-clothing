import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publicKey = 'pk_test_5F5vzvlIuIKw9pIdhQHQW5PV00De5bLQXt';

    const onToken = () => {
        alert("Paymente successfull")
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            Name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publicKey}
        />
    );
}

export default StripeCheckoutButton;