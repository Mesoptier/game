const initialState = {
    count: 0,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'START':
            return initialState;
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1,
            };
        default:
            return state;
    }
}
