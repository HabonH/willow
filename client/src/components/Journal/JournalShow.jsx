import moment from "moment";

const JournalShow = (props) => {
  const { title, entry, date } = props.journal[0];

  return (
    <div className='journal-show'>
      <div
        className='close-button'
        onClick={() => {
          return props.exitShow();
        }}
      ></div>
      <div className='journal-title'>
        <h4>{title}</h4>
      </div>
      <div className='journal-entry'>
        <p>{entry}</p>
      </div>
      <p className='journal-show-date'>
        {moment(date).startOf("minute").fromNow()}
      </p>
    </div>
  );
};

export default JournalShow;
