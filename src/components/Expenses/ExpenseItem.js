import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = ({ title, amount, date }) => {
  const [titleName, setTitleName] = useState(title);

  const clickHandler = () => {
    setTitleName("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item_description">
        <h2>{titleName}</h2>
        <div className="expense-item_price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
