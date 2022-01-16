import moment from "moment";

const JournalListItem = (props) => {
  const { title, entry, scale, date } = props;

  return (
    <article>
      <div>{title}</div>
      <div>{entry}</div>
      <div>{scale}</div>
    </article>
  );
};

export default JournalListItem;
