import React, {ChangeEvent, useState} from 'react';
import {Button} from "./Button";
import s from "./Display.module.css";

export type SettingsType = {
    onChangeHandlerMax: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeHandlerStart: (e: ChangeEvent<HTMLInputElement>) => void
    startValue: number
    maxValue: number
    error: boolean
    count:number
    callback:()=>void
}

export const Settings = ({
                             onChangeHandlerMax,
                             onChangeHandlerStart,
                             startValue,
                             maxValue,
                             error,
                             count,
                             callback
                         } : SettingsType) => {

    return (
        <div className={s.form}>
            <div className={s.twoValue}>
                <div className={s.value}>
                    <h3>max value:</h3>
                    <input
                        className={`${error
                        || (startValue === maxValue)
                        || (startValue > maxValue)
                            ? s.error
                            : ''} ${s.input}`}
                        type={"number"}
                        value={maxValue}
                        onChange={onChangeHandlerMax}
                    />
                </div>
                <div className={s.value}>
                    <h3>start value:</h3>
                    <input
                        className={`${error
                        || (startValue === maxValue)
                        || (startValue > maxValue)
                            ? s.error
                            : ''} ${s.input}`}
                        type={"number"}
                        value={startValue}
                        onChange={onChangeHandlerStart}
                    />
                </div>
            </div>
            <div className={s.buttonSet}>
                <Button count={count}
                        callback={callback}
                        name={'set'}
                        startValue={startValue}
                        maxValue={maxValue}/>
            </div>
        </div>
    )
}