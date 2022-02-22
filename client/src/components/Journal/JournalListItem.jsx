import moment from "moment";

const JournalListItem = (props) => {
  const { id, title, entry, scale, image, date, getJournal } = props;

  const clickHandler = () => {
    getJournal(id);
  };

  const getFeeling = (scale) => {
    if (scale === 1) {
      return "Very bad";
    }
    if (scale === 2) {
      return "Bad";
    }
    if (scale === 3) {
      return "Meh";
    }
    if (scale === 4) {
      return "Good";
    } else {
      return "Very good";
    }
  };

  return (
    <article onClick={clickHandler}>
      <section>
        <div className='journal-plus'>
          <img
            src={require("./Addjournal" + image.slice(1))}
            className='journal-choice'
            alt='choices'
          />
        </div>
        <div>
          <h4 className='journal-title-content'>{title}</h4>
          <section className='journal-card-header'>
            <p>{moment(date).format("dddd, MMMM Do YYYY")}</p>
          </section>
        </div>
        <div className='journal-content'>
          <p className='journal-content-entry'>{entry}</p>
        </div>
        <section className='journal-card-footer'>
          <p>Feeling: {getFeeling(scale)}</p>
          <p className='journal-arrow'>→</p>
        </section>
      </section>
    </article>
  );
};

export default JournalListItem;
