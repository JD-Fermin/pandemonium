import { RECEIVE_MESSAGES, RECEIVE_MESSAGE, REMOVE_MESSAGE } from "../actions/message_actions";
const initialState = []
const messagesReducer = (state = initialState, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_MESSAGES:
            return action.messages;
        
        default:
            return state;
    }
}

export default messagesReducer