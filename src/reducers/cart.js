const cartReducerDefaultState = []

export default ( state = cartReducerDefaultState, action ) => {
    switch(action.type){
        case "ADD_TRIALBOX":
            return [...state, action.product];
        
        case "REMOVE_PRODUCT":
            return state.filter((cart) => {
                return action.id !== expense.id
            })

        default:
            return state;
    }
}