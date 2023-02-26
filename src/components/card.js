import Card from 'react-bootstrap/Card';
import Date from './Date';

function DatesContainer() {
  return (
    <Card className="text-center">
      <Card.Header className='mainFont'> جدول مواعيدك</Card.Header>
      <Card.Body >
        <Card.Title>Appointment Title</Card.Title>
        <div>
          <Date/>
          <Date/>
          <Date/>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default DatesContainer;