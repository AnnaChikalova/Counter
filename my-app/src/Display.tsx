import React, {ChangeEvent, useState} from 'react';
import {Button} from "./Button";
import s from "./Display.module.css";

export type DisplayType = {
    startValue: number
    maxValue: number
    error: boolean
    count:number
    callbackInc:()=>void
    callbackReset:()=>void
    showCount?:boolean
}
export const Display = ({
                             startValue,
                             maxValue,
                             error,
                             count,
                            callbackInc,
                            callbackReset,
                            showCount
                         } : DisplayType) => {

    return (
        <div className={s.form}>
            <div className={s.wrapCounter}>
                <div>
                    {error  ||
                    (startValue === maxValue) ||
                    (startValue > maxValue) ?
                        <h1 className={s.incorrectVal}> Incorrect value! </h1> :
                        showCount
                            ?
                            <h1 className={count === maxValue ? s.counter : s.enterVal}> {count} </h1>
                            :
                            <h1 className={s.enterVal}> Enter values and press 'set'</h1>
                    }
                </div>

            </div>

            <div className={s.buttonIncRes}>
                <Button count={count} callback={callbackInc} name={'inc'} maxValue={maxValue} startValue={startValue}/>
                <Button count={count} callback={callbackReset} name={'reset'} maxValue={maxValue} startValue={startValue}/>
            </div>
        </div>
    )
}