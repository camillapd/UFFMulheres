import "./DashboardLayout.css";

export default function DashboardLayout({ title, cards, charts }) {
  return (
    <div className="dashboard-layout">
      <header className="dashboard-header">
        <div className="header-title">
          <h2>{title}</h2>
        </div>
      </header>

      <section className="info-cards">{cards}</section>

      <div className="content-charts">{charts}</div>
    </div>
  );
}
