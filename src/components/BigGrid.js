import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BigGrid = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={4} xs={12}>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Second slide&bg=282c34"
              alt="Third slide"
            />
          </Col>
          <Col lg={4} xs={12}>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Second slide&bg=282c34"
              alt="Third slide"
            />
          </Col>
          <Col lg={4} xs={12}>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Second slide&bg=282c34"
              alt="Third slide"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={6} xs={12}>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Second slide&bg=282c34"
              alt="Third slide"
            />
          </Col>
          <Col lg={6} xs={12}>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Second slide&bg=282c34"
              alt="Third slide"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BigGrid;