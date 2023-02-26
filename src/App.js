import { Button, Col, Container, Row } from "react-bootstrap";
import DatesContainer from './components/card'
function App() {
  return (
    <div className="mainFont">
        <Container>
          <Row className="justify-content-center">
            <Col className="" sm="8">
              <p>لديك  مواعيد</p>
            </Col>
          </Row>
        </Container>
        {/* our dates */}
        <Container>
          <Row className="justify-content-center">
            <Col className="" sm="8">
              <DatesContainer />
            </Col>
          </Row>
        </Container>
        {/* Buttons for controlling the dates */}
        <Container className="my-2">
          <Row className="justify-content-center">
            <Col className="d-flex justify-content-between " sm="8">
              <Button variant="danger">عرض المواعيد</Button>
              <Button variant="danger">مسح جميع المواعيد</Button>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
