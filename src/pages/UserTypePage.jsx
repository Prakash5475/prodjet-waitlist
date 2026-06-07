import UserTypeCard from "../components/UserTypeCard";

function UserTypePage({
  selectedType,
  setSelectedType,
  onContinue,
}) {
  const types = [
    { title: "Student", icon: "🎓" },
    { title: "Brand", icon: "🏢" },
    { title: "College", icon: "🏫" },
  ];

  return (
    <>
      <h1 className="title">
        Join PRODJET Waitlist
      </h1>

      <p className="subtitle">
        Select your user type
      </p>

      <div className="type-list">
        {types.map((type) => (
          <UserTypeCard
            key={type.title}
            title={type.title}
            icon={type.icon}
            selected={selectedType === type.title}
            onClick={() =>
              setSelectedType(type.title)
            }
          />
        ))}
      </div>

     <button
  disabled={!selectedType}
  onClick={onContinue}
  className="continue-btn"
>
  Continue
</button>
    </>
  );
}

export default UserTypePage;