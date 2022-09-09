import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch} from "react-redux/es/exports";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, ThemeType} from "./bll/themeReducer";
import {useSelector} from "react-redux";


function HW12() {

    let dispatch = useDispatch();
    let options = useSelector<AppStoreType, ThemeType>(state => state.themes.theme)
    let theme = useSelector<AppStoreType, string>(state => state.themes.currentTheme)


    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeAC(theme))
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12<br/>
                Выберете цвет блока:
            </span>
            <SuperSelect value={theme} onChangeOption={onChangeCallback} options={options}/>

            <hr/>
        </div>
    );
}

export default HW12;
