import React, { useState, useEffect } from "react";
import API from "../utils/API";

import finnAPI from "../utils/finnhubAPI";

//Components

// import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";



function Companies() {
  // Setting our component's initial state
  // const [results, setResults] = useState([])
  const [/*companies,*/ setCompanies] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all companies and store them with setCompany
  useEffect(() => {
    loadCompanies()
  });

  // Loads all companies and sets them to companies
  function loadCompanies() {
    API.getCompanies()
      .then(res => 
        setCompanies(res.data)
      )
      .catch(err => console.log(err));
  };


  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveCompany method to save the company data
  // Then reload companies from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.search) {
      finnAPI.getCompanyProfile(formObject.search)
        .then(res => console.log('this is my data' + res.data))
        .catch(err => console.log(err))
    }
  };

  

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <form style={{ marginTop: 100 }} >
            <Input
              onChange={(e) => handleInputChange(e)}
              name="search"
              placeholder="Please enter a company name"
            />
            <FormBtn
              disabled={!(formObject.search)}
              onClick={(e) => handleFormSubmit(e)}
            >
              Search
              </FormBtn>
          </form>
         
          </Col>
        </Row>
      </Container>
    );
  }


export default Companies;
