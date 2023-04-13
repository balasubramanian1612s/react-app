import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  function eventHandler() {
    console.log("Click Panniten!!");
  }

  return (
    <Card color={"grey"}>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">Rs. {props.amount}</div>
          <button className="expense-item__price" onClick={eventHandler}>Summa</button>
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
