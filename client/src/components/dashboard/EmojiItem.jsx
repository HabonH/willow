const EmojiItem = (props) => {
  const { name, affirmation, description, icon } = props;
  return <article className="emoji">{icon}</article>;
};

export default EmojiItem;
