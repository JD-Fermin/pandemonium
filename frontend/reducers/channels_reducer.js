import { FETCH_CHANNEL_LIST, SET_ACTIVE_CHANNEL } from "../actions/channel_actions";

const initialState = {
    channelList: [],
    activeChannel: undefined
}

const channelsReducer = (state = initialState, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)
    switch (action.type) {
        case FETCH_CHANNEL_LIST:
            nextState.channelList = action.payload;
            return nextState;
        case SET_ACTIVE_CHANNEL:
            nextState.activeChannel = action.payload;
            return nextState;
        default:
            return state;
    }
}

export default channelsReducer