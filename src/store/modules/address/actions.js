export function addressRequest() {
    return {
        type: '@address/ADDRESS_REQUEST',
    };
}

export function addressSuccess(address) {
    return {
        type: '@address/ADDRESS_SUCCESS',
        payload: {address},
    };
}

export function addressFailure() {
    return {
        type: '@address/ADDRESS_FAILURE',
    };
}
