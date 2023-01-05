import { combineReducers } from "redux";

import { allUsers , selectedUserReducer } from "./reducers";

export const reducers = combineReducers({
    allUsers, selectedUserReducer
});