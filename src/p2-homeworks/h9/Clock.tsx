import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        window.clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    let seconds, hours, minutes;
    JSON.stringify(date.getHours()).length === 1 ? hours = "0" + date.getHours() : hours = date.getHours()
    JSON.stringify(date.getMinutes()).length === 1 ? minutes = "0" + date.getMinutes() : minutes = date.getMinutes()
    JSON.stringify(date.getSeconds()).length === 1 ? seconds = "0" + date.getSeconds() : seconds = date.getSeconds()

    let year, month, day;
    JSON.stringify(date.getFullYear()).length === 1 ? year = "0" + date.getFullYear() : year = date.getFullYear()
    JSON.stringify(date.getUTCMonth()).length === 1 ? month = "0" + (date.getUTCMonth() +1) : month = date.getUTCMonth()+1
    JSON.stringify(date.getDate()).length === 1 ? day = "0" + date.getDate() : day = date.getDate()


    const stringTime = hours + ":" + minutes + ":" + seconds
    const stringDate = year + "-" + month + "-" + day

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
