import {
    GET_SLIDE,
    SLIDE_ERROR
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case GET_SLIDE:
            return {
                ...state,
                slides: action.payload,
                loading: false
            }
        case SLIDE_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};