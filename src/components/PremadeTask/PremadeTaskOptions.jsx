import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function PremadeTaskOptions({ taskOptions }) {
  return (
    <Card className="premade-option">
      <ListGroup variant="flush">
        {taskOptions &&
          taskOptions.map((option, index) => {
            return (
              <ListGroup.Item key={index} className="premade-option">
                <a href={option.url} rel="noreferrer" target="_blank">
                  {option.name}
                </a>
              </ListGroup.Item>
            );
          })}
      </ListGroup>
    </Card>
  );
}

export default PremadeTaskOptions;
