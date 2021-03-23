export function addProductToCart(product, quantity) {
    return {
        type: '@cart/ADD_CART',
        payload: {product, quantity},
    };
}

export function addProductToCartSuccess() {
    return {
        type: '@cart/ADD_CART_SUCCESS',
    };
}

export function incrementQuantityProduct(index) {
    return {
        type: '@cart/INCREMENT_QUANTITY',
        payload: {index},
    };
}

export function decrementQuantityProduct(index) {
    return {
        type: '@cart/DECREMENT_QUANTITY',
        payload: {index},
    };
}

export function finishOrder(payment) {
    return {
        type: '@cart/FINISH_ORDER',
        payload: {payment},
    };
}

export function clearCart() {
    return {
        type: '@cart/CLEAR_CART',
    };
}

export function cartFailure() {
    return {
        type: '@cart/CART_FAILURE',
    };
}

export function cartSuccess() {
    return {
        type: '@cart/CART_SUCCESS',
    };
}
