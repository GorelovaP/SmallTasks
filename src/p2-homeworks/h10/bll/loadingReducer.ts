const initState: stateType = {
    isLoading: false
}
type stateType = {
    isLoading: boolean
}

type ActionType = loadingACType

export const loadingReducer = (state: stateType = initState, action: ActionType): stateType => {
    switch (action.type) {
        case "CHANGE-LOADING": {

            return action.isLoading ? {...state, isLoading: false} : {...state, isLoading: true}
        }
        default:
            return state
    }
}

type loadingACType = {
    type: "CHANGE-LOADING",
    isLoading: boolean
}


export const loadingAC = (isLoading: boolean): loadingACType => {
    return {type: "CHANGE-LOADING", isLoading: isLoading}
}
