import uuid from 'uuid';



export const addTrialBox = () => ({
    type: "ADD_TRIALBOX",
    product: {
        id: uuid() + "TB",
        quantity:1
    },
    total:30,
    actualTotal:30
})
export const updateTrialBoxQuantity = (quantity, prevPrice, prevQuantity) => ({
    type: "UPDATE_QUANTITY_TRIAL",
    quantity,
    total: (quantity == 1 ? 30 : 50) - prevPrice,
    actualTotal: quantity*30 - prevQuantity*30
})

export const addKossetBox = (HFOP = 6, LMFP = 7, PLSD = 2, quantity = 1, customised ) => ({
    type: "ADD_KOSSETBOX",
    product: {
        id: uuid() + "KB",
        HFOP,
        LMFP,
        PLSD,
        quantity,
        customised
    },
    total: 250,
    actualTotal:250
})
export const updateKossetBoxQuantity = (quantity, prevPrice, prevQuantity) => ({
    type: "UPDATE_QUANTITY_KOSSET",
    quantity,
    total: (quantity == 1 ? 250 : quantity == 2 ? 400 : 1000) - prevPrice,
    actualTotal: quantity*250 - prevQuantity*250
})

export const authenticate = () => ({
    type: "AUTHENTICATE"
})

export const unauthenticate = () => ({
    type: "UNAUTHENTICATE"
})

export const removeProduct = (id) => ({
    type: "REMOVE_PRODUCT",
    id
})

export const applyDiscount = (discount) => ({
    type:"APPLY_DISCOUNT",
    discount
})

export const setUid = (uid) => ({
    type:"SET_UID",
    uid
})
export const unSetUid = () => ({
    type:"UNSET_UID"
})
export const addAddress = (address) => ({
    type:"ADD_ADDRESS",
    address
})
export const resetState = () => ({
    type:"RESET_STATE"
})