const CHANGE_TEXT = "CHANGE-TEXT"
const SET_MODAL_VISIBLE = "SET-MODAL-VISIBLE"


type initStateType = {
    active: boolean,
    headerText: string
    descriptionText: string
}

const initState: initStateType = {
    active: false,
    headerText: "",
    descriptionText: "",

};

type ActionTypes = ReturnType<typeof changeTextAC> | ReturnType<typeof setModalVisibleAC>


export const modalReducer = (state = initState, action: ActionTypes): initStateType => { // fix any
    switch (action.type) {
        case CHANGE_TEXT: {
            return {...state, headerText: action.headerText, descriptionText: action.descriptionText};
        }
        case SET_MODAL_VISIBLE: {
            return {...state, active: action.active}
        }
        default:
            return state;
    }
};

export const changeTextAC = (headerText: string, descriptionText: string,) => {
    return ({type: CHANGE_TEXT, headerText: headerText, descriptionText: descriptionText}) as const
};
export const setModalVisibleAC = (active: boolean) => {
    return ({type: SET_MODAL_VISIBLE, active: active}) as const
};

