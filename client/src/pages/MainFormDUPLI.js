import React, { useState } from "react";
import { Form } from 'react-bootstrap';
import API from "../utils/API";
import { Redirect, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { FormBtn } from "../components/Form";

function MainForm2() {
  // Setting our component's initial state
  const [formObject, setFormObject] = useState({});
  const [showResults, setShowResults] = useState();
  const { symbol } = useParams();

  // // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    let { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  // // When the form is submitted, use the API.saveBook method to save the book data
  // // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.gender && formObject.experienceLevel && formObject.salary) {
      formObject.company = symbol;
      return API.submitUserInfo(formObject, symbol)
        .then(res => setShowResults(true)) //pass this to to the next route which will be the results route
        .catch(err => console.log(err));
    }
  };

  return (showResults ? <Redirect to={"/results/" + symbol} /> : (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Form className="sm-1 mb-3 mt-5">
            <Form.Group>
              <Form.Label>What is your gender?</Form.Label>
              <br />
              <Form.Check inline label="Female" name="gender" type="radio" value="Female" onChange={handleInputChange} />
              <Form.Check inline label="Male" name="gender" type="radio" value="Male" onChange={handleInputChange} />
            </ Form.Group>
            <Form.Group>
              <Form.Label>What is your experience level?</Form.Label>
              <Form.Control name="experienceLevel" as="select" onChange={handleInputChange}>
                <option>Select level</option>
                <option>Entry Level</option>
                <option>Mid Level</option>
                <option>Senior Level</option>
              </Form.Control>

              <Form.Label>What is your salary?</Form.Label>
              <Form.Control size="sm" type="number" name="salary" placeholder="Enter your salary" onChange={handleInputChange} />
            </Form.Group>
            <FormBtn
              disabled={!(formObject.gender && formObject.experienceLevel && formObject.salary)}
              onClick={handleFormSubmit}
            >
              Submit
              </FormBtn>
          </Form>
        </Col>
      </Row>
    </Container>
  ));
}

export default MainForm2;