import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import Card from "react-bootstrap/Card";

export const Common = (props) => {
  return (
    <div>
      <section id="header">
        <Container>
          <Row>
            <Col xs={6} className="boxmargin">
              <h1>
                {props.name}
                <strong className="comcol"> JK Technical</strong>
              </h1>
              <h2 gap={2}>
                We are the team of talented devloper making websites
              </h2>
              <LinkContainer to={props.visit}>
                <Button variant="outline-primary" className="btnmar">
                  {props.btname}
                </Button>
              </LinkContainer>
            </Col>
            <Col xs={6} className="boxmargin">
              <img src={props.imgsrc} className="webimg" alt=""></img>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export const Scard = (props) => {
  return (
    <div>
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{props.sname}</Card.Title>
            <Card.Text>
              {props.serone}
              <br></br>
              {props.sertwo}
              <br></br>
              {props.serthree}
            </Card.Text>
            <LinkContainer to="/Contact">
              <Button variant="outline-primary" className="btnmar">
                Contact Now
              </Button>
            </LinkContainer>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Common;
