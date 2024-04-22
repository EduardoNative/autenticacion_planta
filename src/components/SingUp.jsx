import { Form, Col, Row, Image, Container } from "react-bootstrap";
import imagen from "../assets/imagen.jpg"

export const SingUp = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>hola</h1>
        </Col>

        <Image src={imagen} style={{width:"50%", height:"50%"}} />
      </Row>
    </Container>
  );
};
