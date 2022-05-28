import "./chartBar.css";

const ChartBar = ({ value, maxValue, label }) => {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar_inner">
        <div className="chart-bar_fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar_label">{label}</div>
    </div>
  );
};

export default ChartBar;
