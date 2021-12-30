const axios = require('axios');
const {api} = require('../constants/api');

const getAdzuna = async (query, pathname) => {
    try {
        const {data} = await axios.get(api.URL+pathname,
            { params: query,
                headers: {"content-type": "application/json"}});
        return {result: { data: data, status: 200 }};
    }catch (error) {
        return {error: { status: 500, data: { error }}};
    }
};
module.exports = {getAdzuna};
