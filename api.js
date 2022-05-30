const axios = require('axios');
const queryString = require('querystring');

async function publicCall(path, data, method = 'GET', headers = {}) {
    try {
        const qs = data ? `?${queryString.stringify(data)}` : '';
        const result = await axios({
            method,
            url: `${process.env.VUE_APP_API_URL}${path}${qs}`
        });
        return result.data;
    } catch (err) {
        console.error(err);
    }
}

async function time() {
    return publicCall('/fapi/v1/time');
}

async function depth(symbol = 'BTCUSDT', limit = 5) { //limit = qtd dos ultimos lançaemtos em ordem 5 
    return publicCall('/fapi/v1/depth', { symbol, limit });
}

module.exports = { time, depth }