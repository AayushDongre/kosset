const cartReducerDefaultState = {
    authenticated: false,
    cart: []
}

export default (state = cartReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_TRIALBOX":
            return {
                authenticated: state.authenticated,
                cart: [...state.cart, action.product]
            };

        case "ADD_KOSSETBOX":
            var found = false;
            for (var i = 0; i < state.cart.length; i++) {
                if (!!state.cart[i].id && state.cart[i].id.slice(-2) == 'KB') {
                    found = true;
                    break;
                }
            }
            if (found)
                return state
            else
                return {
                    authenticated: state.authenticated,
                    cart: [...state.cart, action.product]
                };

        case "UPDATE_QUANTITY":
                return {
                    authenticated:state.authenticated,
                    cart: state.cart.map((item) => {
                        if (item.id.slice(-2) == "KB") {
                            return {
                                ...item,
                                quantity: action.quantity
                            }
                        }
                        else if (item.id.slice(-2) == "TB") {
                            return item
                        }
                    })
                }

        case "AUTHENTICATE":
            return {
                authenticated: true,
                cart: state.cart
            }

        case "UNAUTHENTICATE":
            return {
                authenticated: false,
                cart: state.cart
            }
        case "REMOVE_PRODUCT":
            return state.filter((cart) => {
                return action.id !== expense.id
            })

        default:
            return state;
    }
}