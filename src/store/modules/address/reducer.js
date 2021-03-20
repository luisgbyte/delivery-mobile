import produce from 'immer';

const INITIAL_STATE = {
    address: [],
    loading: false,
};

export default function address(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@address/ADDRESS_REQUEST': // Request
            return produce(state, (draft) => {
                draft.loading = true;
            });

        case '@address/ADDRESS_FAILURE': // Request
            return produce(state, (draft) => {
                draft.loading = false;
            });

        case '@address/ADDRESS_SUCCESS': // Request
            return produce(state, (draft) => {
                draft.address = action.payload.address;
                draft.loading = false;
            });

        default:
            return state;
    }
}
