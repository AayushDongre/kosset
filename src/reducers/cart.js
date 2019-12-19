const cartReducerDefaultState = {
    authenticated: false,
    cart: [],
    total: 0,
    discount: 0,
    currentUid: "",
    shipping: 50
}

export default (state = cartReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_TRIALBOX":
            var found = false;
            for (var i = 0; i < state.cart.length; i++) {
                if (!!state.cart[i].id && state.cart[i].id.slice(-2) == 'TB') {
                    found = true;
                    break;
                }
            }
            if (found)
                return state
            else
                return {
                    authenticated: state.authenticated,
                    cart: [...state.cart, action.product],
                    total: state.total + action.total,
                    discount: state.discount,
                    currentUid: state.currentUid,
                    shipping: state.shipping
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
                    cart: [...state.cart, action.product],
                    total: state.total + action.total,
                    discount: state.discount,
                    currentUid: state.currentUid,
                    shipping: state.shipping
                };

        case "UPDATE_QUANTITY_KOSSET":
            return {
                authenticated: state.authenticated,
                cart: state.cart.map((item) => {
                    if (item.id.slice(-2) == "KB") {
                        return {
                            ...item,
                            quantity: action.quantity
                        }
                    }
                    else
                        return item
                }),
                total: state.total + action.total,
                discount: state.discount,
                currentUid: state.currentUid,
                shipping: state.shipping
            }
        case "UPDATE_QUANTITY_TRIAL":
            return {
                authenticated: state.authenticated,
                cart: state.cart.map((item) => {
                    if (item.id.slice(-2) == "TB") {
                        return {
                            ...item,
                            quantity: action.quantity
                        }
                    }
                    else
                        return item
                }),
                total: state.total + action.total,
                discount: state.discount,
                currentUid: state.currentUid,
                shipping: state.shipping
            }


        case "AUTHENTICATE":
            return {
                authenticated: true,
                cart: state.cart,
                total: state.total,
                discount: state.discount,
                currentUid: state.currentUid,
                shipping: state.shipping
            }

        case "UNAUTHENTICATE":
            return {
                authenticated: false,
                cart: state.cart,
                total: state.total,
                discount: state.discount,
                currentUid: state.currentUid,
                shipping:state.shipping
            }
        case "REMOVE_PRODUCT":
            let subtract = 0;
            for (var i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id == action.id) {
                    if (state.cart[i].id.slice(-2) == 'KB')
                        subtract = state.cart[i].quantity == 1 ? 250 : state.cart[i].quantity == 2 ? 400 : 1000
                    if (state.cart[i].id.slice(-2) == 'TB')
                        subtract = state.cart[i].quantity == 1 ? 30 : 50
                }
            }
            return {
                ...state,
                cart: state.cart.filter((expense) => {
                    return action.id !== expense.id
                }),
                total: state.total - subtract
            }

        case "APPLY_DISCOUNT":
            return {
                ...state,
                discount: action.discount
            }
        case "SET_UID":
            return {
                ...state,
                currentUid: action.uid
            }
        case "UNSET_UID":
            return {
                ...state,
                currentUid: ""
            }

        case "RESET_STATE":
            return cartReducerDefaultState
            
        default:
            return state;
    }
}