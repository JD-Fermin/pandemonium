import { CREATE_MEMBERSHIP, FETCH_USER_MEMBERSHIPS } from "../actions/membership_actions";

const memberShipsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case FETCH_USER_MEMBERSHIPS:
            return action.payload
        case CREATE_MEMBERSHIP:
            nextState[action.payload.id] = action.payload;
            return nextState
        default:
            return state;
    }
}

export default memberShipsReducer