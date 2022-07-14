import React from 'react'
import s from './Message.module.css'
type MessageType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}

function Message(props:MessageType) {
    return (
        <div className={s.block}>

           <div className={s.blockAvatar}>
            <img src={props.avatar} alt="Аватарка" className={s.avatar}/>
           </div>
            <div className={s.message}>
            <p className={s.name}>{props.name}</p>
            <div className={s.text}>{props.message}</div>
            <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
