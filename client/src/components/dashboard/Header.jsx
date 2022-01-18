const Header = (props) => {
  const { journalCount } = props;
  return (
    <div className="header-dashboard">
      <div className="dashboard-content">
        <h3 className="header-affirmation">
          Another beautiful day! Keep up the great work.
        </h3>
        <p className="journal-count-title">
          Journal Entries:{" "}
          <strong className="journal-count">{journalCount}</strong>
        </p>
      </div>
    </div>
  );
};

export default Header;
