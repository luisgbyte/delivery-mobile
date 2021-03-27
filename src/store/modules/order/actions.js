export function orderRequest(data) {
    return {
        type: '@order/ORDER_REQUEST',
        payload: {data},
    };
}

export function orderCancel(id) {
    return {
        type: '@order/ORDER_CANCEL',
        payload: {id},
    };
}

export function orderCancelSuccess(order) {
    return {
        type: '@order/ORDER_CANCEL_SUCCESS',
        payload: {order},
    };
}

export function orderRequestSuccess(orders) {
    return {
        type: '@order/ORDER_REQUEST_SUCCESS',
        payload: {orders},
    };
}

export function orderFailure() {
    return {
        type: '@order/ORDER_FAILURE',
    };
}
