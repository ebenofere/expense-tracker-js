const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

const localStorageTransactions = JSON.parse(localStorage.getItem("transactions"));

let transactions = localStorage.getItem("transactions") !== null ? localStorageTransactions : [];
console.log(transactions, "transactions");

// function to add transaction
function addTransaction(e) {
    e.preventDefault();

    if (text.value.trim() === "" || amount.value.trim() === "") {
        alert("enter the text and the amount");
    } else {
        const transaction = {
            id: generateID(),
            text: text.value,
            amount: +amount.value
        }

        // console.log(transaction, "transaction");

        // push object into array
        transactions.push(transaction);

        // add transactions to DOM
        addTransactionDOM(transaction);

        // update values 
        updateValues();

        // update local storage
        updateLocalStorage();

        // clear fields
        text.value = "";
        amount.value = "";
    }
}

function generateID() {
    return Math.floor(Math.random() * 100000000);
}

// function to add transaction to DOM
function addTransactionDOM(transaction) {
    const sign = transaction.amount < 0 ? "-" : "+";
    const signAlphabet = transaction.amount < 0 ? "minus" : "plus";

    const item = document.createElement("li");

    item.classList.add(signAlphabet);

    item.innerHTML = `${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span><button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>`;

    // console.log(item, 'item');

    list.appendChild(item);
}

// function to update the balance, income and expense
function updateValues() {
    const amounts = transactions.map(item => item.amount);
    console.log(amounts, "amount");

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    console.log(total, "total");

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    // console.log(income, "income");

    const expense = (amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1)
        .toFixed(2);
    console.log(expense, "expense");

    balance.innerText = `$${total}`;
    money_plus.innerText = `$${income}`;
    money_minus.innerText = `$${expense}`;
}

// remove transaction by ID
function removeTransaction(id) {
    transactions = transactions.filter(item => item.id !== id);

    updateLocalStorage();

    init();
}

// function to update local storage
function updateLocalStorage() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

// init app
function init() {
    list.innerHTML = "";

    transactions.forEach(addTransactionDOM);
    updateValues();
}

init();


form.addEventListener("submit", addTransaction);