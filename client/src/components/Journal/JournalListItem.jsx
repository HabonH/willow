import moment from "moment";

const JournalListItem = (props) => {
  const { id, title, entry, image, date, getJournal } = props;

  const clickHandler = () => {
    getJournal(id);
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
        </div>
        <div className='journal-content'>
          <p className='journal-content-entry'>{entry}</p>
        </div>
        <section className='journal-card-footer'>
          <div>{moment(date).startOf("minute").fromNow()}</div>
          <div className='journal-arrow'>→</div>
        </section>
      </section>
    </article>
  );
};

export default JournalListItem;
