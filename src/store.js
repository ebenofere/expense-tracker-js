{
  /* OPTION 1 below... */
}

{
  /* {filteredExpenses.length === 0 ? (
    <p className="no-expenses">No expenses found.</p>
  ) : (
    filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  )} */
}

{
  /* OPTION 2: You can also use this conditional below... */
}

{
  filteredExpenses.length === 0 && (
    <p className="no-expenses">No expenses found.</p>
  );
}
{
  filteredExpenses.length > 0 &&
    filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
}
