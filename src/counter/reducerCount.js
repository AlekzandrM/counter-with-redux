const initialState = {
    name: 'Aleks',
    age: 36,
    count: 0
}

export function reducerCount(state=initialState, action){
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        default: return state
    }
}