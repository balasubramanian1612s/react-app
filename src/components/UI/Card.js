import "./Card.css";
function Card(props) {
  let classes = "card " + props.color;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
