function UserTypeCard({
  title,
  icon,
  selected,
  onClick,
}) {
  return (
    <div
      className={`user-card ${selected ? "active" : ""}`}
      onClick={onClick}
    >
      <span className="icon">{icon}</span>
      <h3>{title}</h3>
    </div>
  );
}

export default UserTypeCard;