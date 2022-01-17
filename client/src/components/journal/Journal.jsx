import JournalList from "./JournalList";
import Header from "./Header";

const JournalListItem = (props) => {
  return (
    <div className="main-journal-container">
      <Header />
      <JournalList />
    </div>
  );
};

export default JournalListItem;
