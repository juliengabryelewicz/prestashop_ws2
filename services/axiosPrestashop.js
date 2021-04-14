const axios = require('axios');
const {base_url, output_format, ws_key} = require('./config')
const webservice_key = Buffer.from(ws_key).toString('base64')


function parseError (messages) {
    if (messages) {
        if (messages instanceof Array) {
        return Promise.reject({ messages: messages })
        } else {
        return Promise.reject({ messages: [messages] })
        }
    } else {
        return Promise.reject({ messages: ['Something wrong happened'] })
    }
}

const axios_prestashop = axios.create({
    baseURL: base_url,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic '+ webservice_key,
        'Output-Format': output_format
    },
});


axios_prestashop.interceptors.request.use((config) => {
    return config
}, error => {
    return Promise.reject(error)
})
  
axios_prestashop.interceptors.response.use((response) => {
    return response
}, error => {
    if (error.response) {
        return parseError(error.response.data)
    } else {
        return Promise.reject(error)
    }
})

module.exports = { axios_prestashop}