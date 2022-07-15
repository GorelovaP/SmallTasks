import React from 'react'
import  s from "./Error404.tsx.module.css"
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import { useNavigate } from 'react-router-dom';

function Error404() {
    const navigate = useNavigate();
    return (
        <div className={s.ErrorPage}>
            <div className={s.TypeOfError}>404</div>
            <h1>Page not found!</h1>
            <div className={s.text}>What you are looking for does not exist or is not yet open</div>
            <SuperButton onClick={() => navigate("/pre-junior")} >Main page</SuperButton>
        </div>
    )
}

export default Error404
