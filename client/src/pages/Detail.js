import React, { useState, useEffect } from "react";
import API from "../utils/API";

import { Link } from "react-router-dom";
//Components

// import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";


function ResultsList() {
  // Setting our component's initial state
  // const [results, setResults] = useState([])
  const [companies, setCompanies] = useState([])


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

  // Deletes a companies from the database with a given id, then reloads companies from the db
  function deleteCompany(id) {
    API.deleteCompany(id)
      .then(res => loadCompanies())
      .catch(err => console.log(err));
  }
  

    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
    
            {companies.length ? (
              <List>
                {companies.map(company => (
                  <ListItem key={company._id}>
                    <Link to={"/company/" + company._id}>
                      <strong>
                        {company.title}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteCompany(company._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>

        </Row>
      </Container>
    );
  }


export default ResultsList;