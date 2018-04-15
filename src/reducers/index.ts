import { combineReducers } from "redux";

const appState = (state = [], action: any) => {
    return state;
};

const app = combineReducers({
    appState
});

export default app;
