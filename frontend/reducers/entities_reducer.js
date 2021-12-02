import { combineReducers } from "redux";
import channelsReducer from "./channels_reducer";
import memberShipsReducer from "./memberships_reducer";
import messagesReducer from "./messages_reducer";
import randomServersReducer from "./random_servers_reducer";
import serversReducer from "./servers_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    messages: messagesReducer,
    channels: channelsReducer,
    servers: serversReducer,
    randomServers: randomServersReducer,
    memberships: memberShipsReducer
})

export default entitiesReducer;