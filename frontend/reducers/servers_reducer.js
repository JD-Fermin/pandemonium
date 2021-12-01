import { FETCH_SERVER_LIST, CREATE_SERVER, UPDATE_SERVER, DELETE_SERVER, FETCH_SERVER } from "../actions/server_actions";

const initialState = {}

const serversReducer = (state = initialState, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case FETCH_SERVER_LIST:
            return action.payload;
        case FETCH_SERVER:
            nextState[action.payload.id] = action.payload;
            return nextState;
        case CREATE_SERVER:
            nextState[action.payload.id] = action.payload;
            return nextState;
        case UPDATE_SERVER:
            nextState[action.payload.id] = action.payload;
            return nextState;
        case DELETE_SERVER:
            delete nextState[action.payload];
            return nextState
        default:
            return state;
    }
}

export default serversReducer