
export  type initialStateType = {
    startValue: number
    maxValue: number
    count: number

}
const initialState = {
    startValue: 0,
    maxValue: 0,
    count: 0,

}
export const countReducer = (state: initialStateType = initialState, action: mainType) => {
    switch (action.type) {
        case'INC-COUNT' :
            return {
                ...state,
                count: state.count < action.payload.maxValue ? state.count + 1 : state.count
            }
        case 'RESET-COUNT':
            return {
                ...state,
                count: state.count === action.payload.maxValue ? action.payload.startValue : state
            }
        case 'SET-COUNT' :
            return {
                ...state,
                count: action.payload.startValue
            }
        case 'SET-MAX-VALUE' :
            return {
                ...state,
                maxValue: action.payload.maxValue
            }
        case 'SET-START-VALUE' :
            return {
                ...state,
                startValue: action.payload.startValue
            }

        default:
            return state
    }
}


type mainType = IncCountACType |
    ResetCountACType |
    SetCountACType |
    setMaxValueACType |
    setStartValueACType

export type IncCountACType = ReturnType<typeof incCountAC>
export type ResetCountACType = ReturnType<typeof resetCountAC>
export type SetCountACType = ReturnType<typeof setCountAC>
export type setMaxValueACType = ReturnType<typeof setMaxValueAC>
export type setStartValueACType = ReturnType<typeof setStartValueAC>


export const incCountAC = (maxValue: number) => {
    return {
        type: 'INC-COUNT',
        payload: {maxValue}
    } as const
}
export const resetCountAC = (maxValue: number, startValue: number) => {
    return {
        type: 'RESET-COUNT',
        payload: {maxValue, startValue}
    } as const
}
export const setCountAC = (startValue: number) => {
    return {
        type: 'SET-COUNT',
        payload: {startValue}
    } as const
}
export const setMaxValueAC = (maxValue: number) => {
    return {
        type: 'SET-MAX-VALUE',
        payload: {maxValue}
    } as const
}
export const setStartValueAC = (startValue: number) => {
    return {
        type: 'SET-START-VALUE',
        payload: {startValue}
    } as const
}
