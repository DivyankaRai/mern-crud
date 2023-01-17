import commonRequest from "./ApiCall";
import {BASE_URL} from "./helper"

export const registerfunc = async(data,header)=>{
    return await commonRequest("POST", `${BASE_URL}/user/register`,data,header)
}