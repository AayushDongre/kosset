const cartReducerDefaultState = []

export default (state = cartReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_TRIALBOX":
            return [...state, action.product];

        case "ADD_KOSSETBOX":
            var found = false;
            for (var i = 0; i < state.length; i++) {
                if (!!state[i].id &&   state[i].id.slice(-2) == 'KB') {
                    found = true;
                    break;
                }
            }
            if(found)
                return state
            else 
                return [...state, action.product]
                
        case "REMOVE_PRODUCT":
            return state.filter((cart) => {
                return action.id !== expense.id
            })

        default:
            return state;
    }
}