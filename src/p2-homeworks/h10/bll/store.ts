import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";
import {modalReducer} from "../../h13/modal/modalReducer";

const reducers = combineReducers({
    loading: loadingReducer,
    themes: themeReducer,
    modal: modalReducer
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
