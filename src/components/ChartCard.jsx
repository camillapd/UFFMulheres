import "./ChartCard.css";

export default function ChartCard({ title, ChartComponent, chartProps }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="chart-container">
        <ChartComponent {...chartProps} />
      </div>
    </div>
  );
}
