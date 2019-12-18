import uuid from 'uuid';



export const addTrialBox = () => ({
    type: "ADD_TRIALBOX",
    product: {
        id: uuid() + "TB",
        quantity:1
    },
    total:30
})
export const updateTrialBoxQuantity = (quantity, prevPrice) => ({
    type: "UPDATE_QUANTITY_TRIAL",
    quantity,
    total: (quantity == 1 ? 30 : 50) - prevPrice
})

export const addKossetBox = (HFOP = 6, LMFP = 7, PLSD = 2, quantity = 1) => ({
    type: "ADD_KOSSETBOX",
    product: {
        id: uuid() + "KB",
        HFOP,
        LMFP,
        PLSD,
        quantity
    },
    total: 250
})
export const updateKossetBoxQuantity = (quantity, prevPrice) => ({
    type: "UPDATE_QUANTITY_KOSSET",
    quantity,
    total: (quantity == 1 ? 250 : quantity == 2 ? 400 : 1000) - prevPrice
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

export const applyDiscount = (discount = 0) => ({
    type:"APPLY_DISCOUNT",
    discount
})