import { FETCH_DIRECT_MESSAGES, CREATE_DIRECT_MESSAGE, UPDATE_DIRECT_MESSAGE, DELETE_DIRECT_MESSAGE } from '../actions/direct_message_actions'

const directMessagesReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch(action.type) {
        case FETCH_DIRECT_MESSAGES:
            return action.payload
        case CREATE_DIRECT_MESSAGE:
            nextState[action.payload.id] = action.payload
            return nextState
        case UPDATE_DIRECT_MESSAGE:
            nextState[action.payload.id] = action.payload
            return nextState
        case DELETE_DIRECT_MESSAGE:
            delete nextState[action.payload]
            return nextState
        default:
            return state;
    }
}

export default directMessagesReducer