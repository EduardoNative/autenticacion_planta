import { Form, Col, Row, Image, Container, Button } from "react-bootstrap";
import imagen from "../assets/imagen.jpg";

export const SingUp = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl={2}>
          <Form>
            <Form.Group>
              <Form.Label>Get Started Now</Form.Label>
              <Form.Label>
                Enter your Credencials to access your account
              </Form.Label>
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Enter your name"></Form.Control>
              <Form.Label>Email address</Form.Label>
              <Form.Control placeholder="Enter your email"></Form.Control>
              <Form.Label>Password</Form.Label>
              <Form.Control placeholder="Name"></Form.Control>
              <Form.Check
                type="checkbox"
                label="I agree to the terms & policy"
              ></Form.Check>
              <Button variant="success">Signup</Button>{" "}
            </Form.Group>
          </Form>
        </Col>

        <Col>
          <Image src={imagen} fluid />
        </Col>
      </Row>
    </Container>
  );
};
