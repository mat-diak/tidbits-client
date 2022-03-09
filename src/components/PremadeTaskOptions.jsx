import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./PremadeTaskOptions.css";

function PremadeTaskOptions({ taskOptions }) {
  return (
    <Card className="premade-option">
      <ListGroup variant="flush">
        {taskOptions &&
          taskOptions.map((option, index) => {
            return (
              <ListGroup.Item key={index} className="premade-option">
                {option}
              </ListGroup.Item>
            );
          })}
      </ListGroup>
    </Card>
  );
}

export default PremadeTaskOptions;
