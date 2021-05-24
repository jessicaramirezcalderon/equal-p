import React from "react";
//Components
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

function Home() {
  
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
              <h1>Welcome</h1>
          </Col>

        </Row>
      </Container>
    );
  }


export default Home;
