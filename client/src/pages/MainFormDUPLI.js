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
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  // // When the form is submitted, use the API.saveBook method to save the book data
  // // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.gender && formObject.experience_level && formObject.salary_range) {
      return API.submitUserInfo(formObject, symbol)
        .then(res => setShowResults(true)) //pass this to to the next route which will be the results route
        .catch(err => console.log(err));
    }
  };

  return (showResults ? <Redirect to="/results" /> : (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Form className="sm-1 mb-3 mt-5">
            <Form.Group>
              <Form.Label>What is your gender?</Form.Label>
              <br />
              <Form.Check inline label="Female" name="gender" type="radio" onChange={handleInputChange} />
              <Form.Check inline label="Male" name="gender" type="radio" onChange={handleInputChange} />
            </ Form.Group>
            <Form.Group>
              <Form.Label>What is your experience level?</Form.Label>
              <Form.Control name="experience_level" as="select" onChange={handleInputChange}>
                <option>Select level</option>
                <option>Entry Level</option>
                <option>Mid Level</option>
                <option>Senior Level</option>
              </Form.Control>

              <Form.Label>What is your salary range?</Form.Label>
              <Form.Control name="salary_range" as="select" onChange={handleInputChange}>
                <option>Select range</option>
                <option>$40,000 - $60,000</option>
                <option>$60,000 - $90,000</option>
                <option>$90,000 - $150,000</option>
              </Form.Control>
            </Form.Group>
            <FormBtn
              disabled={!(formObject.gender && formObject.experience_level && formObject.salary_range)}
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