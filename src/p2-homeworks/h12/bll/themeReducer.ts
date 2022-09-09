const CHANGE_THEME = "CHANGE-THEME"

export type ThemeType = string[]
type initStateType = {
    theme: ThemeType,
    currentTheme: string
}

const initState: initStateType = {
    theme: ["some", "dark", "red", "grey", "marin"],
    currentTheme: "dark"
};

type ActionTypes = ReturnType<typeof changeThemeAC>

export const themeReducer = (state = initState, action: ActionTypes): initStateType => { // fix any
    switch (action.type) {
        case CHANGE_THEME: {
            return {...state, currentTheme: action.theme};
        }
        default:
            return state;
    }
};
type changeThemeType = {
    type: string,
    theme: string
}

export const changeThemeAC = (theme: string): changeThemeType => {
    return ({type: CHANGE_THEME, theme: theme}) as const
};

