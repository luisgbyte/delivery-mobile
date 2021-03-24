export function orderRequest(data) {
    return {
        type: '@order/ORDER_REQUEST',
        payload: {data},
    };
}

export function orderSuccess(orders) {
    return {
        type: '@order/ORDER_SUCCESS',
        payload: {orders},
    };
}

export function orderFailure() {
    return {
        type: '@order/ORDER_FAILURE',
    };
}
