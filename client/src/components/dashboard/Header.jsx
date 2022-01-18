const Header = (props) => {
  const { journalCount, quote } = props;

  return (
    <div className="header-dashboard">
      <div className="dashboard-content">
        <h3 className="header-affirmation">{quote.quote}</h3>
        <p className="quote-author"> -{quote.author}</p>

        <p className="journal-count-title">
          Journal Entries:{" "}
          <strong className="journal-count">{journalCount}</strong>
        </p>
      </div>
    </div>
  );
};

export default Header;
