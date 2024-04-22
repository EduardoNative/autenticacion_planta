import { Form, Col, Row, Image, Container } from "react-bootstrap";
import imagen from "../assets/imagen.jpg";

export const SingUp = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl={2}>
          <h1>hola</h1>
        </Col>

        <Col>
          <Image src={imagen} fluid />
        </Col>
      </Row>
    </Container>
  );
};
