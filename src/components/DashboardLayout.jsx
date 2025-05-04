import "./DashboardLayout.css";

export default function DashboardLayout({ titulo, cards, charts }) {
  return (
    <div className="dashboard-layout">
      <header className="dashboard-header">
        <div className="header-title">
          <h2>{titulo}</h2>
        </div>
      </header>

      <section className="info-cards">{cards}</section>

      <div className="content-charts">{charts}</div>
    </div>
  );
}
