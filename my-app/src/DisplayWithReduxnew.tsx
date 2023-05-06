import React, {ChangeEvent, useState} from 'react';
import {Button} from "./Button";
import s from "./Display.module.css";
import {useDispatch, useSelector} from "react-redux";
import {incCountAC, initialStateType, setCountAC, resetCountAC, setMaxValueAC, setStartValueAC} from "./State/countReducernew";
import {AppRootStateType} from "./State/Store";
import {Settings} from "./Settings";
import {Display} from "./Display";


export const DisplayWithRedux = ()=>{

    const dispatch=useDispatch()
    // @ts-ignore
    let count= useSelector <AppRootStateType, number>(state => state.count.count)
    // @ts-ignore
    let startValue= useSelector <AppRootStateType, number>(state => state.count.startValue)
    // @ts-ignore
    let maxValue= useSelector <AppRootStateType, number>(state => state.count.maxValue)

    let [error, setError] = useState(false)
    let [showCount, setShowCount] = useState(false);
    const callbackInc=()=>{
        dispatch(incCountAC(maxValue))
    }
    const callbackReset=()=>{
        dispatch(resetCountAC(maxValue, startValue))
        setShowCount(false)
    }
    const callbackSet = () => {
        dispatch(setCountAC(startValue))
        setShowCount(true)
    }

    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.valueAsNumber >= 0) {
            dispatch(setMaxValueAC(e.currentTarget.valueAsNumber))
            setError(false)
        } else {
            setError(true)
        }

    }
    const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.valueAsNumber >= 0) {
            dispatch(setStartValueAC(e.currentTarget.valueAsNumber))
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