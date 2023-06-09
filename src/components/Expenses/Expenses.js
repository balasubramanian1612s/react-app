import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <Card color={"white"}>
      <div className="expenses">
        {expenses.map((e) => {
          return (
            <ExpenseItem date={e.date} title={e.title} amount={e.amount} />
          );
        })}
      </div>
    </Card>
  );
}

export default Expenses;
