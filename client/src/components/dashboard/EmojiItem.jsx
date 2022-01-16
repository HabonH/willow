const EmojiItem = (props) => {
  const { icon, getEmoji, id } = props;

  const clickHandler = () => {
    getEmoji(id);
  };

  return (
    <article className="emoji" onClick={clickHandler}>
      {icon}
    </article>
  );
};

export default EmojiItem;
