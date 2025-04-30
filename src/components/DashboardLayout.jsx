import "./DashboardLayout.css";

export default function DashboardLayout({ curso, cards, charts }) {
  return (
    <div className="dashboard-layout">
      <header className="dashboard-header">
        <div className="header-title">
          <h2>Dashboard {curso}</h2>
        </div>
      </header>

      <section className="info-cards">{cards}</section>

      <div className="content-charts">{charts}</div>
    </div>
  );
}
