const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-mins");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

// const dummyTransactions = [
//   {id: 1, text: "Flower", amount: -20},
//   {id: 2, text: "Salary", amount: 300},
//   {id: 3, text: "Book", amount: -10},
//   {id: 4, text: "Camera", amount: 150},
// ];

const localStorageTransactions = JSON.parse(localStorage.getItem("transactions")
);

let transactions = localStorage.getItem("transactions") !== null ? localStorageTransactions : [];

// Add transaction
function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === "" || amount.value.trim() === "") {
    alert("Please add a text and amount");
  } else {
    const transaction = {
      id: generateID(),
      text:text.value,
      amount: +amount.value
    }

    // adding the newly created `transaction` object to an array named `transactions`
    transactions.push(transaction);

    // adding transaction to DOM
    addTransactionDOM(transaction);

    // update the income, expense and balance
    updateValues();

    // update local storage transactions
    updateLocalStorage();

    // clear input fields
    text.value = '';
    amount.value = '';
  }
}

// Generate random ID
function generateID() {
  return Math.floor(Math.random() * 100000000);
}

// Add transaction to DOM list
function addTransactionDOM(transaction) {

}