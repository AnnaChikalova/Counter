import React, {ChangeEvent, useState} from 'react';
import s from "./Display.module.css";
import {Settings} from "./Settings";
import {Display} from "./Display";


export const CounterDisplayAndSettings = () => {
    let [maxValue, setMaxValue] = useState(0)
    let [startValue, setStartValue] = useState(0)
    let [count, setCount] = useState(startValue)
    let [error, setError] = useState(false)
    let [showCount, setShowCount] = useState(false);


    const callbackInc = () => {
        setCount(count < maxValue ? count + 1 : count)
    }
    const callbackReset = () => {
        setCount(count === maxValue ? startValue : count)
        setShowCount(false)
    }
    const callbackSet = () => {
        setCount(startValue)
        setShowCount(true)
    }

    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.valueAsNumber >= 0) {
            setMaxValue(e.currentTarget.valueAsNumber)
            setError(false)
        } else {
            setError(true)
        }

    }
    const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.valueAsNumber >= 0) {
            setStartValue(e.currentTarget.valueAsNumber)
            setError(false)
        } else {
            setError(true)
        }
    }

    return (
        <div>
            <div className={s.container}>
                <div className={s.formWrapper}>
                    <Settings
                        onChangeHandlerMax={onChangeHandlerMax}
                        onChangeHandlerStart={onChangeHandlerStart}
                        startValue={startValue}
                        maxValue={maxValue}
                        error={error}
                        count={count}
                        callback={callbackSet}/>

                    <Display
                        startValue={startValue}
                        maxValue={maxValue}
                        error={error}
                        count={count}
                        callbackInc={callbackInc}
                        callbackReset={callbackReset}
                        showCount={showCount}/>
                </div>
            </div>
        </div>
    )
}