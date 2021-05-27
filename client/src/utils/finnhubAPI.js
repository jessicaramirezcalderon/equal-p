import axios from "axios";

const key = process.env.REACT_APP_FINN_APIKEY;

export default {
    
    getCompanyProfile: function (query) {
        return axios.get(`https://finnhub.io/api/v1/search?q=${query}&token=${key}`)
        //WORKING https://finnhub.io/api/v1/stock/profile2?symbol=${query}&token=${key}
        // https://finnhub.io/api/v1/stock/profile2?symbol=${query}&token=${key}
        // https://finnhub.io/api/v1/stock/profile2?symbol=AAPL&&token=${key}
        // https://finnhub.io/api/v1/stock/profile2?symbol=AAPL&token=c2b9uhqad3i8k5kfmpp0
    },
    getCompany: function (symbol) {
        return axios.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${key}`);
    }
};




