import { FILTER_SERVICE } from "./action";

const initialState = {
    query: '',
};

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_SERVICE:
            const { name, value } = action.payload;
            return { ...state, [name]: value };
        default:
            return state;
    }
}

export default listReducer;