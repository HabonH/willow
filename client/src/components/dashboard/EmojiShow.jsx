const EmojiShow = (props) => {
  const { name, description, affirmation, icon } = props.emoji[0];

  return (
    <div className="emoji-show-card">
      <div
        className="close-button"
        onClick={() => {
          return props.exitShow();
        }}
      ></div>
      <div className="emoji-show-header">
        <h1 className="emoji-show-icon">{icon}</h1>
        <div className="emoji-show-header-content">
          <h2 className="emoji-show-name">{name}</h2>{" "}
          <p className="emoji-show-description">
            <strong>What it is: </strong>
            {description}
          </p>
        </div>
      </div>
      <div className="emoji-show-body">
        <p className="emoji-show-affirmation">{affirmation}</p>
      </div>
    </div>
  );
};

export default EmojiShow;
