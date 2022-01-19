import { FETCH_CONVERSATION_LIST, CREATE_CONVERSATION, DELETE_CONVERSATION } from '../actions/conversation_actions'

const conversationsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case FETCH_CONVERSATION_LIST:
            return action.payload
        case CREATE_CONVERSATION:
            nextState[action.payload.id] = action.payload;
            return nextState
        case DELETE_CONVERSATION:
            delete nextState[action.payload]
            return nextState;
        default:
            return state;
    }
}

export default conversationsReducer