import React, { useState } from "react";
import finnAPI from "../utils/finnhubAPI";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

function Companies() {
  // Setting our component's initial state
  // const [results, setResults] = useState([])
  const [companies, setCompanies] = useState([])
  const [formObject, setFormObject] = useState({})


  // Load all companies and store them with setCompany
  // useEffect(() => {
  //   loadCompanies()
  // });

  // Loads all companies and sets them to companies
  // function loadCompanies() {
  //   API.getCompanies()
  //     .then(res =>
  //       setCompanies(res.data)
  //     )
  //     .catch(err => console.log(err));
  // };

  // function deleteCompany(id) {
  //   API.deleteCompany(id)
  //     .then(res => loadCompanies())
  //     .catch(err => console.log(err));
  // }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  // When the form is submitted, use the API.saveCompany method to save the company data
  // Then reload companies from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.search) {
      finnAPI.getCompanyProfile(formObject.search)
        .then(res => setCompanies(res.data.result))
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
      <Row>
        <Col size="md-6">
        {companies.length ? (
          <div>
          <h5 style={{ textAlign: "center", marginBottom: "40px" }}>Please select your company from the list below</h5>
            <List>
              {companies.map(company => (
                <ListItem key={company.symbol}>
                  <Link className="text-secondary" style={{ textDecoration: "none" }} to={"/company/" + company.symbol}>
                    <strong>
                      {company.description}
                    </strong>
                  </Link>
                  {/* <DeleteBtn onClick={() => deleteCompany(company._id)} /> */}
                </ListItem>
              ))}
            </List>
            </div>

          ) : (
              null
            )}
        </Col>
      </Row>
    </Container>
  );
}


export default Companies;
