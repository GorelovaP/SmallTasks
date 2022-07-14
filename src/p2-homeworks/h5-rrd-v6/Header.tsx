import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from "./Header.module.css"

type ActiveType = "pre-junior" | "junior" | "junior+" | string

function Header() {
    const [active, SetActive] = useState<ActiveType>("pre-junior")
    const tagClickHandler = (text: string) => {
        SetActive(text.trim())
    }
    let ClassPreJunior = `${s.nav} ${active === "pre-junior" ? s.active : ""}`
    let ClassJunior = `${s.nav} ${active === "junior" ? s.active : ""}`
    let ClassJuniorPlus = `${s.nav} ${active === "junior+" ? s.active : ""}`
    return (
        <div className={s.header}>
            <div className={s.block}>
                <NavLink onClick={(e) => tagClickHandler(e.currentTarget.text)} className={ClassPreJunior}
                         to={"/pre-junior"}> pre-junior </NavLink>
                <NavLink onClick={(e) => tagClickHandler(e.currentTarget.text)} className={ClassJunior}
                         to={"/junior"}> junior </NavLink>
                <NavLink onClick={(e) => tagClickHandler(e.currentTarget.text)} className={ClassJuniorPlus}
                         to={"/junior+"}> junior+ </NavLink>
                <div className={s.circle}> </div>
            </div>

        </div>
    )
};

export default Header
