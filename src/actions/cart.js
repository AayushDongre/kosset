import uuid from 'uuid';

export const addTrialBox = () => ({
    type:"ADD_TRIALBOX",
    product:{
        id:uuid() + "TB",
    }
})

export const addKossetBox = ( HFOP=6, LMFP=7, PLSD=2, quantity=1 ) => ({
    type:"ADD_KOSSETBOX",
    product:{
        id: uuid() + "KB",
        HFOP,
        LMFP,
        PLSD,
        quantity
    },

})
export const updateKossetBoxQuantity = (quantity) => ({
    type:"UPDATE_QUANTITY",
    quantity
})

export const authenticate = () => ({
    type:"AUTHENTICATE"
})

export const unauthenticate = () => ({
    type:"UNAUTHENTICATE"
})

export const removeProduct = ({ id } = {}) => ({
    type:"REMOVE_PRODUCT",
    id
})