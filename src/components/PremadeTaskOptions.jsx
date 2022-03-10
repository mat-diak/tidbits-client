import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./PremadeTaskOptions.css";

function PremadeTaskOptions({ taskOptions }) {
  return (
    <Card className="premade-option">
      <ListGroup variant="flush">
        {taskOptions &&
          taskOptions.map((option, index) => {
            console.log(option);
            return (
              <ListGroup.Item key={index} className="premade-option">
                <a href={option.url} rel="noreferrer" target="_blank">{option.name}</a>
              </ListGroup.Item>
            );
          })}
      </ListGroup>
    </Card>
  );
}

export default PremadeTaskOptions;
