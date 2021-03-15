import produce from 'immer';

const INITIAL_STATE = {
    address: [],
};

export default function address(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@address/ADDRESS_SUCCESS': // Request
            return produce(state, (draft) => {
                console.tron.log(action.payload.address);
                draft.address = action.payload.address;
            });

        default:
            return state;
    }
}
