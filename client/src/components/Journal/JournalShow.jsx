const JournalShow = (props) => {
  const { title, entry, date } = props.journal[0];

  return (
    <div className='journal-show'>
      <div className='journal-title'>{title}</div>
      <div className='journal-entry'>{entry}</div>
      <button
        className='exit-show'
        onClick={() => {
          return props.exitShow();
        }}
      >
        x
      </button>
    </div>
  );
};

export default JournalShow;
