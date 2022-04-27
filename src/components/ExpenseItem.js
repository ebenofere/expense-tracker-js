import "./ExpenseItem.css";

function ExpenseItem({ title, amount }) {
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item_price">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
