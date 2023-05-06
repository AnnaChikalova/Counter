import React from 'react';
//эта реализация счетчика с хардкордными значениями от 0 до 5 на редаксе

// const initialState:number=0
// export const countReducer=(state=initialState, action:mainType)=>{
//     switch (action.type){
//         case'INC-COUNT' : {
//             return state<=4?state+1:state
//         }
//         case 'RESET-COUNT': {
//             return state===5?0:state
//         }
//         default: return state
//     }
// }
//
// type mainType= IncCountACType | ResetCountACType
// export type IncCountACType= ReturnType<typeof incCountAC>
// export type ResetCountACType=ReturnType<typeof resetCountAC >
// export const incCountAC=()=>{
// return {
//     type:'INC-COUNT',
//     payload:{}
// } as const
// }
// export const resetCountAC=()=>{
//     return {
//         type:'RESET-COUNT',
//         payload:{}
//     } as const
// }