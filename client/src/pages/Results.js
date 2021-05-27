import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

function Results() {
  const { symbol } = useParams();
  const [results, setResults] = useState({});

  useEffect(() => {
    loadResults()
  }, {});

  // Loads all companies and sets them to companies
  function loadResults() {
    API.getCompanyResults(symbol)
      .then(res =>
        setResults(res.data)
      )
      .catch(err => console.log(err));
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          {results.avgFemaleEntryLevel}
        </Col>
      </Row>
    </Container>
  );
}

export default Results;