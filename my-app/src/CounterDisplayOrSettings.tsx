import React, {ChangeEvent, useState} from 'react';
import {Button} from "./Button";
import s from "./Display.module.css";
import {Settings} from "./Settings";


export const CounterDisplayOrSettings = () => {
    let [maxValue, setMaxValue] = useState(0)
    let [startValue, setStartValue] = useState(0)
    let [count, setCount] = useState(startValue)
    let [error, setError] = useState(false)
    let [showSettings, setShowSettings] = useState(false);


    const callbackInc = () => {
        setCount(count < maxValue ? count + 1 : count)
    }
    const callbackReset = () => {
        setCount(count === maxValue ? startValue : count)

    }
    const callbackSet = () => {
        setCount(startValue)
        setShowSettings(false)
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
    const onClickSetSettings=()=>{
        setShowSettings(true)
    }

    return (
        <div>
            <div className={s.container}>
                <div className={s.formWrapper}>
                    {showSettings
                    ?
                        <Settings
                            onChangeHandlerMax={onChangeHandlerMax}
                            onChangeHandlerStart={onChangeHandlerStart}
                            startValue={startValue}
                            maxValue={maxValue}
                            error={error}
                            count={count}
                            callback={callbackSet}
                        />
                    :
                        <div className={s.form}>
                            <div className={s.wrapCounter}>
                                <div>
                                    <h1 className={(count === maxValue && count > 0) ? s.counter : s.enterVal}> {count} </h1>
                                </div>
                            </div>

                            <div className={s.buttonIncRes}>
                                <Button count={count}
                                        callback={callbackInc}
                                        name={'inc'}
                                        maxValue={maxValue}
                                        startValue={startValue}/>
                                <Button count={count}
                                        callback={callbackReset}
                                        name={'reset'}
                                        maxValue={maxValue}
                                        startValue={startValue}/>
                                <button className={`${s.button} ${s.btn}`}
                                        name={'set'}
                                        onClick={onClickSetSettings}
                                > set
                                </button>
                            </div>

                        </div>
                    }



                </div>
            </div>
        </div>
    )
}