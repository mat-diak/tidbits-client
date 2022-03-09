import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./PremadeTaskOptions.css";

function PremadeTaskOptions({ taskOptions }) {
  console.log(taskOptions)
  return (
    <Card className="premade-option">
      <ListGroup variant="flush">
        {console.log({ taskOptions })}
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
