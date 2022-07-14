import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=> void // need to fix any
    addUser: ()=> void;  // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onBlur: (e: ChangeEvent<HTMLInputElement>)=> void;

}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onBlur} // деструктуризация пропсов
) => {


    return (
        <div className={s.greeting}>
            <SuperInputText
                onBlur={onBlur}
                value={name}
                onChange={setNameCallback}
                placeholder={"UserSurname"}
                error={error}
                className={s.blue} // проверьте, рабоет ли смешивание классов
            />
            <SuperButton disabled={!name} onClick={addUser} >Add</SuperButton>
            <span>{totalUsers}</span>

        </div>
    )
}

export default Greeting
