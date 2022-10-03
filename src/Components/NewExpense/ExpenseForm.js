import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [enterTUserDetail, setenterUserDetail] = useState({
    enterTitle: "",
    enterAmount: "",
    enterDate: "",
  });
  let [decision, setDecision] = useState(false);
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
    setDecision(false);
    props.onSaveExpenseData(expenseData);
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    setenterUserDetail({
      enterTitle: "",
      enterAmount: "",
      enterDate: "",
    });
    setDecision(false);
  };
  const clickHandler = () => {
    console.log("yes", decision);
    setDecision(true);
  };
  let formContent;
  if (decision) {
    formContent = (
      <form>
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
          <button type="submit" onClick={cancelHandler}>
            Cancel
          </button>
          <button type="submit" onClick={submitHandler}>
            Add Expense
          </button>
        </div>
      </form>
    );
  } else {
    formContent = <button onClick={clickHandler}>Add New Expense</button>;
  }

  return <div>{formContent}</div>;
}
