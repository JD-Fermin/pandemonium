import { combineReducers } from "redux";
import messagesReducer from "./messages_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    messages: messagesReducer
})

export default entitiesReducer;