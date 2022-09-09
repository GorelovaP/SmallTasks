import Slider from '@material-ui/core/Slider';
import * as React from 'react';
import {ChangeEvent, useEffect} from "react";
import s from "../../HW11.module.css"


function valuetext(value: number) {
    return `${value}°C`;
}


type PropsType = {
    value1: number;
    value2: number;
    setValue1: (v: number) => void
    setValue2: (v: number) => void
}
export default function SuperDoubleRange(props: PropsType) {

    useEffect(() => {
        if (props.value1 < value[1]) {
            setValue([props.value1, value[1]])
        }
    }, [props.value1])


    const [value, setValue] = React.useState<number[]>([props.value1, props.value2]);

    const handleChange = (event: ChangeEvent<{}>, newValue: number | number[]) => {

        let [v1, v2] = [...newValue as number[]]
        if (v1 < v2) {
            setValue(newValue as number[]);
            props.setValue1(v1)
            props.setValue2(v2)
        }

    };

    return (
        <div className={s.range}>
            < Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={(event: ChangeEvent<{}>, value: number | number[]) => handleChange(event, value)}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                color={"primary"}
            />
        </div>
    );
}
