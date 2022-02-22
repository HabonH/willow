import "./Card.css";

function Card(props) {
  const { className } = props;
  const classes = "card-default " + (className ? className : "");
  return <div className={classes}>{props.children}</div>;
}

export default Card;
