import React, {useState} from 'react'
import {NavLink, useMatch} from 'react-router-dom'
import s from "./Header.module.css"


function Header() {
    const match = useMatch('/:routeKey');

    return (
        <div className={s.header}>
            <div className={s.block}>
                <NavLink className={`${s.nav} ${match?.params.routeKey === "pre-junior" ? s.active : undefined}`}
                         to={"/pre-junior"}> pre-junior </NavLink>
                <NavLink className={`${s.nav} ${match?.params.routeKey === "junior" ? s.active : undefined}`}
                         to={"/junior"}> junior </NavLink>
                <NavLink className={`${s.nav} ${match?.params.routeKey === "junior+" ? s.active : ''}`}
                         to={"/junior+"}> junior+ </NavLink>
                <div className={s.circle}> </div>
            </div>

        </div>
    )
};

export default Header
