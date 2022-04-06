function PremadeTaskOptions({ taskOptions }) {
  return (
    <div className="premade-option">
      <div>
        {taskOptions &&
          taskOptions.map((option, index) => {
            return (
              <div key={index} className="premade-option">
                <a href={option.url} rel="noreferrer" target="_blank">
                  {option.name}
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default PremadeTaskOptions;
