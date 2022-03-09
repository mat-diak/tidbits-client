import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import './PremadeTaskOptions.css'

function PremadeTaskOptions() {
  return (
    <Card className="premade-option">
      <div className="premade-option">Hello</div>
      <ListGroup variant="flush">
        <ListGroup.Item className="premade-option">Cras justo odio</ListGroup.Item>
        <ListGroup.Item className="premade-option">Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item className="premade-option"> Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default PremadeTaskOptions;
