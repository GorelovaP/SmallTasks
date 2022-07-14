import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affer.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    affair: AffairType;
    deleteAffairCallback: (id: number) => void;
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}
    let typeOfPriority = s.affairPriority + " " + s[props.affair.priority]
    return (
        <div className={s.affair}>
           <div className={s.affairName}>{props.affair.name}</div>
            <div className={typeOfPriority}> [{props.affair.priority}]</div>
            <SuperButton red onClick={deleteCallback}>Delete</SuperButton>
        </div>
    )
}

export default Affair
