function PremadeTaskOptions({ taskOptions }) {
  return (
    <div className="task-opt">
        {taskOptions &&
          taskOptions.map((option, index) => {
            return (
              <div key={index} className="premade-option">
                <a className="opt-link" href={option.url} rel="noreferrer" target="_blank">
                  {option.name}
                </a>
              </div>
            );
          })}
    </div>
  );
}

export default PremadeTaskOptions;
