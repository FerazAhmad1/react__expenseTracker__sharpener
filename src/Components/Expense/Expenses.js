import ExpenseItems from "../Expense/ExpenseItems";
import Card from "../UI/Card";
import "../Expense/Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");
  const filterChangeHandler = (selected) => {
    setfilteredYear(selected);
  };
  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />{" "}
      {filteredExpenses.map((expenses) => (
        <ExpenseItems
          id={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        ></ExpenseItems>
      ))}
      {/* <ExpenseItems
        title={expenses.items[0].title}
        amount={expenses.items[0].amount}
        date={expenses.items[0].date}
      ></ExpenseItems>
      <ExpenseItems
        title={expenses.items[1].title}
        amount={expenses.items[1].amount}
        date={expenses.items[1].date}
      ></ExpenseItems>
      <ExpenseItems
        title={expenses.items[2].title}
        amount={expenses.items[2].amount}
        date={expenses.items[2].date}
      ></ExpenseItems>
      <ExpenseItems
        title={expenses.items[3].title}
        amount={expenses.items[3].amount}
        date={expenses.items[3].date}
      ></ExpenseItems>
      <ExpenseItems
        title="Food Rs 10"
        amount="petrol Rs 100"
        date={new Date()}
      ></ExpenseItems> */}
    </Card>
  );
};

export default Expenses;
