import React from 'react';
import s from "./Display.module.css";

type ButtonType = {
    name: string
    callback: () => void
    count: number
    maxValue: number
    startValue: number
}

export const Button = (props: ButtonType) => {
    const onClickHandler = () => {
         props.callback()
    }
    return (
        <button
            className={`${s.button} ${s.btn}`}
            disabled={(props.count === props.maxValue && props.name === 'inc') ||
            (props.maxValue === props.startValue ||
             props.maxValue < props.startValue && props.name === 'set')
            }
            onClick={onClickHandler}>
            {props.name}
        </button>


    )
}
