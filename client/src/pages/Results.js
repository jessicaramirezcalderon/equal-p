import React, { useEffect, useState } from "react";
import API from "../utils/API";
import finnAPI from "../utils/finnhubAPI";
import { useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function Results() {
    const { symbol } = useParams();
    const [results, setResults] = useState({});
    const [companyName, setCompanyName] = useState();

    useEffect(() => {
        loadResults();
        loadCompany();
    }, {});

    // Loads all companies and sets them to companies
    function loadResults() {
        API.getCompanyResults(symbol)
            .then(res =>
                setResults(res.data)
            )
            .catch(err => console.log(err));
            console.log('this is my company' + symbol)
    }

    function loadCompany() {
        finnAPI.getCompany(symbol)
            .then(res =>
                setCompanyName(res.data.name)
            )
            .catch(err => console.log(err));
    }

    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                  
                    <h2>{results.avgFemaleEntryLevel}</h2>
                    <h2>{results.avgFemaleMidLevel}</h2>
                    <h2>{results.avgFemaleSeniorLevel}</h2>
                    <h2>{results.avgMaleEntryLevel}</h2>
                    <h2>{results.avgMaleMidLevel}</h2>
                    <h2>{results.avgMaleSeniorLevel}</h2>
                    
                    {companyName}
                </Col>
            </Row>
        </Container>
    );
}

export default Results;