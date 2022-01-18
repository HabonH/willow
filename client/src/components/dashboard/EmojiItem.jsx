const EmojiItem = (props) => {
  const { icon, getEmoji, id, name } = props;

  const clickHandler = () => {
    getEmoji(id);
  };

  return (
    <article className="emoji" onClick={clickHandler}>
      <img alt={name} src={icon} className="emoji-image-grid" />
    </article>
  );
};

export default EmojiItem;
