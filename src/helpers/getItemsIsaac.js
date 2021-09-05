import isaacItemsApi from "../api/isaacApi";

const axios = require('axios');

const getIsaacItems = async() => {
    const res = await isaacItemsApi.get()
    const arrayItems = []
    for (let i = 0; i < res.count; i++) {
        arrayItems.push(res.data[i])
    }

    while( true ) {
        const newPageRes = await axios.get(res.next);

        for (let i = 0; i < newPageRes.count; i++) {
            arrayItems.push(newPageRes.data[i])
        }
    }

}