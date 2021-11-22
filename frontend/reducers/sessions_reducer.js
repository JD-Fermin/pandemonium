import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_SESSION_ERRORS} from "../actions/session_actions"

const _nullUser = Object.freeze({currentUser: null})
const sessionsReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState["currentUser"] = action.currentUser
            return nextState;
        case LOGOUT_CURRENT_USER:
            return _nullUser
        default:
            return state;
    }
}

export default sessionsReducer;