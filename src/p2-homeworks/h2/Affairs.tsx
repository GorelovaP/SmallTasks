import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) => void;
    deleteAffairCallback: (id: number) => void;
    filter: FilterType;
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    // const setAll = () => {props.setFilter("all")}
    // const setHigh = () => {props.setFilter("high")}
    // const setMiddle = () => {props.setFilter("middle")}
    // const setLow = () => {props.setFilter("low")}

    const SetOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    }

    return (
        <div>
            {mappedAffairs}
            <SuperButton className={ props.filter == "all" ? "active" : ""} value={"all"} onClick={SetOnClick}>All</SuperButton>
            <SuperButton className={ props.filter == "high" ? "active" : ""} value={"high"} onClick={SetOnClick}>High</SuperButton>
            <SuperButton className={ props.filter == "middle" ? "active" : ""} value={"middle"} onClick={SetOnClick}>Middle</SuperButton>
            <SuperButton className={ props.filter == "low" ? "active" : ""} value={"low"} onClick={SetOnClick}>Low</SuperButton>
        </div>
    )
}

export default Affairs
