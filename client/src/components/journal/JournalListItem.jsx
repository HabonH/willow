import moment from "moment";

const JournalListItem = (props) => {
  const { title, entry, scale, date } = props;

  return (
    <article className='content'>
      <section className='row'>
        <div className='title-content'>{title}</div>
        <div>{entry}</div>
      </section>
      <div>{moment(date).startOf("minute").fromNow()}</div>
    </article>
  );
};

export default JournalListItem;
