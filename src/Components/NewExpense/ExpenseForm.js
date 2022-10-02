import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [enterTUserDetail, setenterUserDetail] = useState({
    enterTitle: "",
    enterAmount: "",
    enterDate: "",
  });

  const titleChangeHandler = (event) => {
    // setenterUserDetail({
    //   ...enterTUserDetail,
    //   enterTitle: event.target.value,
    // });
    setenterUserDetail((prevState) => {
      return { ...prevState, enterTitle: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setenterUserDetail((prevState) => {
      return { ...prevState, enterAmount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setenterUserDetail((prevState) => {
      return { ...prevState, enterDate: event.target.value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    let expenseData = {
      title: enterTUserDetail.enterTitle,
      amount: enterTUserDetail.enterAmount,
      date: new Date(enterTUserDetail.enterDate),
    };
    setenterUserDetail({
      enterTitle: "",
      enterAmount: "",
      enterDate: "",
    });
    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label for="">title</label>
          <input
            type="text"
            value={enterTUserDetail.enterTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label for="">Amount</label>
          <input
            type="Number"
            min={0.01}
            step="0.01"
            value={enterTUserDetail.enterAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label for="">Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            value={enterTUserDetail.enterDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
