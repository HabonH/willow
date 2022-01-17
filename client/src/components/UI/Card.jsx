import "./Card.css";

function Card(props) {
  const classes = 'card-default ' + props.className
    return <div className={classes}>{props.children}</div>
    
  }

export default Card;
