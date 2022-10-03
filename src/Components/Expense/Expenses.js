import ExpenseItems from "../Expense/ExpenseItems";
import Card from "../UI/Card";
import "../Expense/Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");
  const filterChangeHandler = (selected) => {
    setfilteredYear(selected);
  };
  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });
  let expenseContent = <p className="message">No Expense Found</p>;
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expenses) => (
      <ExpenseItems
        id={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      ></ExpenseItems>
    ));
  }
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />{" "}
      <ExpenseChart expenses={filteredExpenses} />
      {expenseContent}
      {filteredExpenses.length === 1 ? (
        <p className="message">Only single Expense here. Please add more..."</p>
      ) : (
        ""
      )}
    </Card>
  );
};

export default Expenses;
