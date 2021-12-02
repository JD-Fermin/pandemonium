import { FETCH_RANDOM_SERVER_LIST } from "../actions/server_actions";

const randomServersReducer = (state = {}, action) => {
    Object.freeze(state);
   
    switch (action.type) {
        case FETCH_RANDOM_SERVER_LIST:
            return action.payload
    
        default:
            return state;
    }
}

export default randomServersReducer