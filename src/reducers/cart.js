const cartReducerDefaultState = {
    authenticated: false,
    cart: [],
    total: 0,
    discount: 0
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
                    discount: state.discount
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
                    discount: state.discount
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
                discount: state.discount
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
                discount: state.discount
            }


        case "AUTHENTICATE":
            return {
                authenticated: true,
                cart: state.cart,
                total: state.total,
                discount: state.discount
            }

        case "UNAUTHENTICATE":
            return {
                authenticated: false,
                cart: state.cart,
                total: state.total,
                discount: state.discount
            }
        case "REMOVE_PRODUCT":
            let subtract = 0;
            for (var i = 0; i < state.products.length; i++) {
                if (state.products[i].id == action.id) {
                    subtract = state.products[i].quantity == 1 ? 250 : state.products[i].quantity == 2 ? 400 : 1000
                }
            }
            return {
                ...state,
                products: state.products.filter((expense) => {
                    return action.id !== expense.id
                }),
                total: state.total - subtract
            }

        case "APPLY_DISCOUNT":
            return {
                ...state,
                discount: action.discount
            }

        default:
            return state;
    }
}