import axios from "axios";

export default {
  testUserRouter: function () {
    return axios.get(`${process.env.REACT_APP_API_URL}/api/users/test`);
    
  },
  login: function (userData) {
    return axios.post(`${process.env.REACT_APP_API_URL}/api/users/login`, userData);
  },
  logout: function () {
    return axios.get(`${process.env.REACT_APP_API_URL}/api/users/logout`);
  },
  signup: function (userData) {
    return axios.post(`${process.env.REACT_APP_API_URL}/api/users/signup`, userData);
  },
  getUser: function () {
    return axios.get(`${process.env.REACT_APP_API_URL}/api/users/data`);//works
  },

  // Gets all companies
  getCompanies: function () {
    return axios.get(`${process.env.REACT_APP_API_URL}/api/companies`);//works
  },
  getRatings: function () {
    return axios.get(`${process.env.REACT_APP_API_URL}/api/reviews`);//works
  },
  saveRating: function (ratingData) {
    return axios.post(`${process.env.REACT_APP_API_URL}/api/reviews`, ratingData);
  },
  submitUserInfo: function (userInfo, companySymbol) {
    return axios.post(`${process.env.REACT_APP_API_URL}/api/companies/${companySymbol}/submission`, userInfo);
  },
  // Gets the company with the given id
  getCompanyProfile: function (id) {
    return axios.get(`${process.env.REACT_APP_API_URL}/api/companies/` + id);
  },
  getCompanyResults: function(symbol) {
    return axios.get(`${process.env.REACT_APP_API_URL}/api/companies/${symbol}/results`);
  },
  // Deletes the company with the given id
  deleteCompany: function (id) {
    return axios.delete(`${process.env.REACT_APP_API_URL}/api/companies/` + id);
  },
  // Saves a company to the database
  saveCompany: function (companyData) {
    return axios.post(`${process.env.REACT_APP_API_URL}/api/companies`, companyData);
  }
};
