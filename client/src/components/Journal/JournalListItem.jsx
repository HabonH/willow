import moment from "moment";

const JournalListItem = (props) => {
  const { id, title, entry, scale, date, getJournal } = props;

  const clickHandler = () => {
    getJournal(id);
  };
  return (
    <article onClick={clickHandler}>
      <section className='row-container'>
        <div className='title-content'>{title}</div>
        <div>{entry}</div>
      </section>
      <div>{moment(date).startOf("minute").fromNow()}</div>
    </article>
  );
};

export default JournalListItem;
