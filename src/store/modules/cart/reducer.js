import produce from 'immer';

const INITIAL_STATE = {
    products: [],
    loading: false,
};

export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@cart/ADD_CART': // Add cart
            return produce(state, (draft) => {
                const {product, quantity} = action.payload;

                const productExists = draft.products.findIndex(
                    (item) => item.id === product.id,
                );

                if (productExists > -1) {
                    draft.products[productExists] = {...product, quantity};
                } else {
                    draft.products.push({...product, quantity});
                }
            });

        case '@cart/INCREMENT_QUANTITY':
            return produce(state, (draft) => {
                const {index} = action.payload;

                // eslint-disable-next-line no-plusplus
                draft.products[index].quantity++;
            });

        case '@cart/DECREMENT_QUANTITY':
            return produce(state, (draft) => {
                const {index} = action.payload;

                // eslint-disable-next-line no-plusplus
                draft.products[index].quantity--;

                if (draft.products[index].quantity < 1) {
                    draft.products.splice(index, 1);
                }
            });

        case '@cart/FINISH_ORDER':
            return produce(state, (draft) => {
                draft.loading = true;
            });

        case '@cart/CART_FAILURE':
            return produce(state, (draft) => {
                draft.loading = false;
            });

        case '@cart/CART_SUCCESS':
            return produce(state, (draft) => {
                draft.products = [];
                draft.loading = false;
            });

        default:
            return state;
    }
}
