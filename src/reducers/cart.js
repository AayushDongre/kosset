const cartReducerDefaultState = {
    authenticated: false,
    cart: [],
    total: 0,
    actualTotal: 0,
    discountPercent: 0,
    discountValue: 0,
    currentUid: "",
    shipping: 50,
    address: ""
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
                    discountPercent: state.discountPercent,
                    discountValue: state.discountValue,
                    currentUid: state.currentUid,
                    shipping: (state.total + action.total) >= 500 ? 0 : 50,
                    actualTotal: state.actualTotal + action.actualTotal,
                    address: state.address
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
            else {
                var deletedCart = state.cart.filter((item) => {
                    return !item.id.slice(-2) == 'KB'
                })

                return {
                    authenticated: state.authenticated,
                    cart: [...deletedCart, action.product],
                    total: state.total + action.total,
                    discountPercent: state.discountPercent,
                    discountValue: state.discountValue,
                    currentUid: state.currentUid,
                    shipping: (state.total + action.total) >= 500 ? 0 : 50,
                    actualTotal: state.actualTotal + action.actualTotal,
                    address: state.address
                };


            }
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
                discountPercent: state.discountPercent,
                discountValue: state.discountValue,
                currentUid: state.currentUid,
                shipping: (state.total + action.total) >= 500 ? 0 : 50,
                actualTotal: state.actualTotal + action.actualTotal,
                address: state.address
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
                discountPercent: state.discountPercent,
                discountValue: state.discountValue,
                currentUid: state.currentUid,
                shipping: (state.total + action.total) >= 500 ? 0 : 50,
                actualTotal: state.actualTotal + action.actualTotal,
                address: state.address
            }


        case "AUTHENTICATE":
            return {
                authenticated: true,
                cart: state.cart,
                total: state.total,
                discountPercent: state.discountPercent,
                discountValue: state.discountValue,
                currentUid: state.currentUid,
                shipping: state.shipping,
                actualTotal: state.actualTotal,
                address: state.address
            }

        case "UNAUTHENTICATE":
            return {
                authenticated: false,
                cart: state.cart,
                total: state.total,
                discountPercent: state.discountPercent,
                discountValue: state.discountValue,
                currentUid: state.currentUid,
                shipping: state.shipping,
                actualTotal: state.actualTotal,
                address: state.address
            }
        case "REMOVE_PRODUCT":
            let subtract = 0;
            let actualSubtract = 0
            for (var i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id == action.id) {
                    if (state.cart[i].id.slice(-2) == 'KB') {
                        subtract = state.cart[i].quantity == 1 ? 250 : state.cart[i].quantity == 2 ? 400 : 1000
                        actualSubtract = state.cart[i].quantity * 250
                    }
                    if (state.cart[i].id.slice(-2) == 'TB') {
                        subtract = state.cart[i].quantity == 1 ? 30 : 50
                        actualSubtract = state.cart[i].quantity * 30
                    }
                }
            }
            let newCart = state.cart.filter((expense) => {
                return action.id !== expense.id
            })
            return {
                ...state,
                cart: newCart,
                discountPercent: newCart.length == 0 ? 0 : state.discountPercent,
                discountValue: newCart.length == 0 ? 0 : state.discountValue,
                total: state.total - subtract,
                actualTotal: state.actualTotal - actualSubtract,
                shipping: (state.total - subtract) >= 500 ? 0 : 50
            }

        case "APPLY_DISCOUNT":
            let discountValue = parseFloat(action.discount.total) 
            let discountPercent = parseFloat(action.discount.percentage)
            let delivery = parseFloat(action.discount.delivery)
            return {
                ...state,
                discountValue,
                discountPercent,
                shipping: delivery
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
        case "ADD_ADDRESS":
            return {
                ...state,
                address: action.address
            }
        case "EMPTY_CART":
            return {
                ...state,
                cart: [],
                total: 0,
                actualTotal: 0,
                discountPercent: 0,
                discountValue: 0,
                shipping: 50,
            }

        case "RESET_STATE":
            return cartReducerDefaultState

        default:
            return state;
    }
}