import React from "react";
import "./ExpenseFilter.css";
export default function ExpenseFilter(props) {
  const dropDownChangeHandler = (event) => {
    console.log("yes", event.target);
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="filter">
      <div className="filter__title">
        <h3>filter by year</h3>
      </div>
      <div className="filter__option">
        <select
          name=""
          value={props.selected}
          id="options"
          onChange={dropDownChangeHandler}
        >
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
}
