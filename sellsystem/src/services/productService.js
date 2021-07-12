import { API } from "./apiConfig"
const productEndpoint = "products"
export const productService = {
    findAll : async()=>{
        return API.get(productEndpoint).then(res=>res.data)
    },
    findById: async (id)=>{
        return API.get(`${productEndpoint}/${id}`)
    },
    create: async(product)=>{
        return API.post(`${productEndpoint}`,product)
    }
}