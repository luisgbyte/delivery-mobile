export function productRequest(page) {
    return {
        type: '@product/PRODUCT_REQUEST',
        payload: {page},
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
