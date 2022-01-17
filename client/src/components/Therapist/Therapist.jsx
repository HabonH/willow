import TherapistList from "./TherapistList";
import Header from "./Header";

const TherapistListItem = (props) => {
  return (
    <div className="main-therapist-container">
      <Header />
      <TherapistList />
    </div>
  );
};

export default TherapistListItem;
