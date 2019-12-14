import uuid from 'uuid';

export const addTrialBox = () => ({
    type:"ADD_PRODUCT",
    product:{
        id:uuid() + "TB",
    }
})

export const addKossetBox = ({ HFOP=6, LMFP=7, PLSD=2 }) => ({
    type:"ADD_PRODUCT",
    product:{
        id: uuid() + "KB",
        HFOP,
        LMFP,
        PLSD
    }
})

export const removeProduct = ({ id } = {}) => ({
    type:"REMOVE_PRODUCT",
    id
})