import produce from 'immer';

const INITIAL_STATE = {
    products: [],
    loading: false,
};

export default function products(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@product/PRODUCT_REQUEST':
            return produce(state, (draft) => {
                draft.loading = true;
            });

        case '@product/PRODUCT_SUCCESS': // Request
            return produce(state, (draft) => {
                const data = action.payload.products;
                draft.products = [...data];
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
