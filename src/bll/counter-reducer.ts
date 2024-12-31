const initialState = {
    value: 1000
}

type InitialStateType = typeof initialState

export const counterReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INC_COUNTER_VALUE": {
            return {
                ...state, value: state.value + 1
            }
        }
        case "SET-VALUE-FROM-LOCAL-STORAGE": {
            return {
                ...state,value: action.value
            }
        }
        default:
            return state
    }
}


export const incCounterValueAC = () => {
    return {type: "INC_COUNTER_VALUE"} as const
}
export const setValuesFromLocalStorageAC = (value: number) => {
    return {type: "SET-VALUE-FROM-LOCAL-STORAGE", value} as const
}

export type IncValuesAT = ReturnType<typeof incCounterValueAC>
export type SetValuesFromLocalStorageACAT = ReturnType<typeof setValuesFromLocalStorageAC>


export type ActionType = IncValuesAT | SetValuesFromLocalStorageACAT