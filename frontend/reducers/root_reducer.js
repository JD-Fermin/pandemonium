import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";
import sessionReducer from "./session_reducer";

const rootReducer = combineReducers({
   entities: entitiesReducer,
   session: sessionReducer,
   errors: errorsReducer
})

export default rootReducer