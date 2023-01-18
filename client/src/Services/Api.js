import commonRequest from "./ApiCall";
import {BASE_URL} from "./helper"

export const registerfunc = async(data,header)=>{
    return await commonRequest("POST", `${BASE_URL}/user/register`,data,header)
}

export const usergetfunc = async()=>{
    return await commonRequest("GET",`${BASE_URL}/user/details`,"")
}

export const singleUserGetFunc = async(id)=>{
    return await commonRequest("GET",`${BASE_URL}/user/details/${id}`)
}

export const edituser = async(id,data,header)=>{
    return await commonRequest("PUT",`${BASE_URL}/user/edit/${id}`,data,header)
}