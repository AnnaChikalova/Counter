import React from 'react';
// import {Button} from "./Button";
// import s from "./Display.module.css";
// import {useDispatch, useSelector} from "react-redux";
// import {incCountAC, resetCountAC} from "./State/countReducer";
// import {AppRootStateType} from "./State/Store";
//
// эта реализация счетчика с хардкордными значениями от 0 до 5 на редаксе
//
// export const DisplayWithRedux = ()=>{
//
//     const dispatch=useDispatch()
//     let counter= useSelector <AppRootStateType, number>(state => state.count)
//     const callbackInc=()=>{
//         dispatch(incCountAC())
//     }
//     const callbackReset=()=>{
//         dispatch(resetCountAC())
//     }
//     return(
//
//             <div className={s.number}>
//                 <div className={counter===5? s.counter:''}>
//                     <div className={s.display}>
//                     {counter}
//                     </div>
//                 </div>
//         <Button count = {counter} callback={callbackInc} name={'inc'} />
//         <Button count = {counter} callback={callbackReset} name={'reset'} />
//         </div>
//
//     )
// }