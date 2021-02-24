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

export function finishOrder() {
    return {
        type: '@cart/FINISH_ORDER',
    };
}
