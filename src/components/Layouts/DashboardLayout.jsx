import SidebarHeader from "../Sidebar/SidebarHeader";
import "./Layout.css";

export default function DashboardLayout({ title, cards, charts }) {
  return (
    <div className="content-layout">
      <div className="mobile-header">
        <SidebarHeader />
      </div>
      <header className="content-header">
        <div className="header-title">
          <h2>{title}</h2>
        </div>
      </header>

      <section className="info-cards">{cards}</section>

      <div className="content-charts">{charts}</div>
    </div>
  );
}
