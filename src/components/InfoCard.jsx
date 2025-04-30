import "./InfoCard.css";

export default function InfoCard({ title, value, icon, subtitle }) {
  return (
    <div className="info-card-small">
      {icon && <div className="info-icon">{icon}</div>}
      <div className="info-content">
        <h3>{title}</h3>
        <p className="info-value">{value}</p>
        {subtitle && <p className="info-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}
