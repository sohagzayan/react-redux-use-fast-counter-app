const initialValue = 10

export const incDecNumber = (state = initialValue , action)=> {
    switch(action.type){
        case "INCREMENT" : return state + 1 ;
        case "DECREMENT" : return state - 1 ;
        default : return state
    }
}