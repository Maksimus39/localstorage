import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {thunk} from "redux-thunk";
import {loadState, saveState} from "../utils/localStorageUtils";


const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer, loadState(), applyMiddleware(thunk),);


store.subscribe(() => {
    saveState({
        counter:store.getState().counter
    })
})


export type AppStateType = ReturnType<typeof rootReducer>

export type AppStoreType = typeof store