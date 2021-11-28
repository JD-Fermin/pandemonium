import { combineReducers } from "redux";
import channelsReducer from "./channels_reducer";
import messagesReducer from "./messages_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    messages: messagesReducer,
    channels: channelsReducer
})

export default entitiesReducer;