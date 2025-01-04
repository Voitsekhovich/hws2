


const initState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: ActionsType):{isLoading:boolean} => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING': {
           return {...state,isLoading:action.isLoading}

        }
             
        

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})


export type loadingActionType = ReturnType<typeof loadingAC>
type ActionsType =loadingActionType