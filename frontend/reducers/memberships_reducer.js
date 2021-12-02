import { CREATE_MEMBERSHIP } from "../actions/membership_actions";

const memberShipsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case CREATE_MEMBERSHIP  :
            return action.payload
        default:
            return state;
    }
}

export default memberShipsReducer