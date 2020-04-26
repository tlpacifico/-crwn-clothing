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

export const removeItemToCart = (cartItems, cartItemtoRemove) => { 
    const existingCartItem = cartItems.find(c => c.id === cartItemtoRemove.id);
    
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== cartItemtoRemove.id);
    }

    return cartItems.map(item => item.id === cartItemtoRemove.id
        ? {...item, quantity: item.quantity - 1 }
        : item 
        );
}