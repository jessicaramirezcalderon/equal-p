import React from "react";
//Components
// import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

function Home() {

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">

          <div style={{ margin: "20px"}}>
            <h5 style={{ margin: "30px"}}>Rethinking company culture since the beginning of time</h5>
            <button type="button" className="btn btn-success">
              <a style={{ textDecoration: "none", color: "white"}} href="/login">Get Started</a>
            </button>
          </div>


        </Col>

      </Row>
    </Container>
  );
}


export default Home;
