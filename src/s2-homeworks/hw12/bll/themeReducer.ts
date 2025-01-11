const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionType): { themeId: number } => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            { return { ...state, themeId: action.id } }


        default:
            return state
    }
}


type changeThemeIdType ={
    type: 'SET_THEME_ID',
    id:number
}


export const changeThemeId = (id: number):changeThemeIdType => ({
    type: 'SET_THEME_ID' as const ,
    id,
})


type ActionType = ChangeThemeIdType

export type ChangeThemeIdType = ReturnType<typeof changeThemeId>// fix any
