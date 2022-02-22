import moment from "moment";

const ShowJournalListItem = (props) => {
  const { id, title, entry, image, date, getJournal } = props;

  const clickHandler = () => {
    getJournal(id);
  };

  return (
    <article onClick={clickHandler}>
      <section>
        <div className='journal-plus'>
          <img
            src={require("../Journal/Addjournal" + image.slice(1))}
            className='journal-choice'
            alt='choices'
          />
        </div>
        <div>
          <h4 className='journal-title-content'>{title}</h4>
        </div>
        <div className='journal-content'>
          <p className='journal-content-entry'>{entry}</p>
        </div>
        <section className='journal-card-footer'>
          <p>{moment(date).startOf("minute").fromNow()}</p>
          <p className='journal-arrow'>→</p>
        </section>
      </section>
    </article>
  );
};

export default ShowJournalListItem;
