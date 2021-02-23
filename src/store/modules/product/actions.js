export function productRequest() {
    return {
        type: '@product/PRODUCT_REQUEST',
    };
}

export function productSuccess(products) {
    return {
        type: '@product/PRODUCT_SUCCESS',
        payload: {products},
    };
}

export function productFailure() {
    return {
        type: '@product/PRODUCT_FAILURE',
    };
}
