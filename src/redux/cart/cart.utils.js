export const addItemToCart = (cartItems, cartItemtoAdd) => { 
    const hasExistingCartItem = cartItems.find(c => c.id === cartItemtoAdd.id);
    
    if (hasExistingCartItem) {
        return cartItems.map(item => item.id === cartItemtoAdd.id
            ? {...item, quantity: item.quantity + 1 }
            : item 
            );
    }

    return [...cartItems, { ...cartItemtoAdd, quantity: 1 }]
}