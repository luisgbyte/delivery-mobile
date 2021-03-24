import produce from 'immer';

const INITIAL_STATE = {
    orders: [],
    loading: false,
};

export default function user(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@order/ORDER_SUCCESS':
            return produce(state, (draft) => {
                const data = action.payload.orders;
                draft.orders = [...data];
                draft.loading = false;
            });
        case '@order/ORDER_REQUEST':
            return produce(state, (draft) => {
                draft.loading = true;
            });
        case '@order/ORDER_FAILURE':
            return produce(state, (draft) => {
                draft.loading = false;
            });
        default:
            return state;
    }
}
