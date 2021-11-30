import { FETCH_CHANNEL_LIST, CREATE_CHANNEL, UPDATE_CHANNEL, DELETE_CHANNEL } from "../actions/channel_actions";

const initialState = {}

const channelsReducer = (state = initialState, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case FETCH_CHANNEL_LIST:
            return action.payload
        case CREATE_CHANNEL:
            nextState[action.payload.id] = action.payload;
            return nextState;
        case UPDATE_CHANNEL:
            nextState[action.payload.id] = action.payload;
            return nextState;
        case DELETE_CHANNEL:
            delete nextState[action.payload];
            return nextState;
        default:
            return state;
    }
}

export default channelsReducer