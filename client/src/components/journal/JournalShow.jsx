const EmojiShow = (props) => {
  const { title, entry, date } = props.journal[0];

  return (
    <div className='journal-show'>
      <div className='title-content'>{title}</div>
      <div className='content'>{entry}</div>
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

export default EmojiShow;
