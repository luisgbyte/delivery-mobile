import produce from 'immer';

const INITIAL_STATE = {
    products: null,
    count: null,
    loading: false,
};

export default function products(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@product/PRODUCT_SUCCESS': // Request
            return produce(state, (draft) => {
                const {rows, count} = action.payload.products;

                draft.products = rows;
                draft.count = count;

                draft.loading = false;
            });

        case '@product/PRODUCT_FAILURE':
            return produce(state, (draft) => {
                draft.loading = false;
            });

        default:
            return state;
    }
}
