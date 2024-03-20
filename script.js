const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
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

    // adding transaction to DOM list
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
  // get sign
  const sign = transaction.amount < 0 ? "-" : "+";

  // get item
  const item = document.createElement("li");

  item.classList.add(transaction.amount < 0 ? "minus" : "plus");

  item.innerHTML = `${transaction.text}<span>${sign}${transaction.amount}</span><button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button></li>`;

  list.appendChild(item);
}

// Update the income, expense and balance
function updateValues() {
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  balance.innerText = `$${total}`;
  money_plus.innerText = `$${income}`;
  money_minus.innerText = `$${expense}`;
}

// remove transaction by ID
function removeTransaction(id) {
  transactions = transactions.filter(transaction => transaction.id !== id);

  updateLocalStorage();

  init();
}

// update local storage transactions 
function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Init app
function init() {
  list.innerHTML = "";

  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();

form.addEventListener('submit', addTransaction);