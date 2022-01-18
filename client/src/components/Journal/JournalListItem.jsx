import moment from "moment";

const JournalListItem = (props) => {
  const { id, title, entry, scale, date, getJournal } = props;

  const clickHandler = () => {
    getJournal(id);
  };
  return (
    <article onClick={clickHandler}>
      <section className='row-container'>
        <div className='journal-title-content '>
          <h4>{title}</h4>
        </div>
        <div className='journal-content'>
          <p>{entry}</p>
        </div>
      </section>
      <div>{moment(date).startOf("minute").fromNow()}</div>
    </article>
  );
};

export default JournalListItem;
