import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = ({ title, amount, date }) => {
  const clickHandler = () => {
    console.log("Robinson Crusoe!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item_price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Login</button>
    </Card>
  );
};

export default ExpenseItem;
