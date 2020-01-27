const initialState = {
    age: 36,
    name: 'Aleks',    
    count: 0
}

export function reducerData(state=initialState, action){
    switch(action.type){
        case 'NAME':
            return{
                name: state.name
            }
        case 'AGE':
            return{
                age: state.age
            }
        default: return state
    }
}