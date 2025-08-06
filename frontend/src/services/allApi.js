import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"


// add item
export const addItemApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/add-prod`,reqBody)
}

// get item ?search=${searchkey}
export const getItemApi = async()=>{
    return await commonApi('GET',`${serverUrl}/get-prod`)
}

// delete item
export const deleteItemApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/delete-prod/${id}`)
}

// get item
export const getProdApi = async(id)=>{
    return await commonApi('GET',`${serverUrl}/prod/${id}`)
}

// update item
export const editProdApi = async(id,reqBody)=>{
    return await commonApi('PUT',`${serverUrl}/edit-prod/${id}`,reqBody)
}




