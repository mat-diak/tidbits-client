import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./PremadeTaskOptions.css";

function PremadeTaskOptions() {
  return (
    <Card className="premade-option">
      <ListGroup variant="flush">
        <ListGroup.Item className="premade-option">Hello</ListGroup.Item>
        <ListGroup.Item className="premade-option">
          Dapibus ac facilisis in
        </ListGroup.Item>
        <ListGroup.Item className="premade-option">
          {" "}
          Vestibulum at eros
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default PremadeTaskOptions;
