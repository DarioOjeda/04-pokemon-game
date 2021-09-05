import axios from "axios";

const isaacItemsApi = axios.create({
    baseURL: 'https://isaac.jamesmcfadden.co.uk/api/v1/item'
})

export default isaacItemsApi