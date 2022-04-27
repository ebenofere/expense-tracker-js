import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item_description">
        <h2>Car Insurance</h2>
        <div className="expense-item_price">$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
