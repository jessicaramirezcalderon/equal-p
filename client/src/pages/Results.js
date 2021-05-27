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
                    <div style={{ padding: 40, marginTop: 40}}>
                        <h2 style={{ backgroundColor: "yellow"}}>{companyName}</h2>
                        <h2>Female Entry Level: ${results.avgFemaleEntryLevel}</h2>
                        <h2>Female Mid Level: ${results.avgFemaleMidLevel}</h2>
                        <h2>Female Senior Level: ${results.avgFemaleSeniorLevel}</h2>
                        <h2>Male Entry Level: ${results.avgMaleEntryLevel}</h2>
                        <h2>Male Mid Level: ${results.avgMaleMidLevel}</h2>
                        <h2>Male Senior Level: ${results.avgMaleSeniorLevel}</h2>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Results;