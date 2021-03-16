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

export function addressUpdate(data) {
    return {
        type: '@address/ADDRESS_UPDATE',
        payload: {data},
    };
}

export function addressCreate(data) {
    return {
        type: '@address/ADDRESS_CREATE',
        payload: {data},
    };
}

export function addressFailure() {
    return {
        type: '@address/ADDRESS_FAILURE',
    };
}
