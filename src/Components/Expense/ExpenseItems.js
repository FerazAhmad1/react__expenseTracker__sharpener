import "../Expense/ExpenseItems.css";
import ExspenseDate from "../Expense/ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItems = (props) => {
  //   let expenseDate = new Date().toDateString();
  //   const expenseTitle = "car Insurance";
  //   const expenseAmount = 2889;
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("updated");
    console.log("button has been clicked");
  };

  return (
    <Card className="expense-item">
      <ExspenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price"> {props.amount}</div>
      </div>
      <button onClick={clickHandler}>BUTTON</button>
    </Card>
  );
};

export default ExpenseItems;
