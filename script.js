const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

const localStorageTransactions = JSON.parse(localStorage.getItem("transactions"));

let transactions = localStorage.getItem("transactions") !== null ? localStorageTransactions : [];

// function to add transaction
function addTransaction(e) {
    e.preventDefault();

    if (text.value === "" || amount.value === "") {
        alert("enter the text and the amount");
    } else {
        let transaction = {
            id: generateID(),
            text: text.value,
            amount: amount.value
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

    const item = document.createElement("list");

    item.classList.add(signAlphabet);

    item.innerHTML = `${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span><button class="delete-btn">x</button></li>`;

    // console.log(item, 'item');

    list.appendChild(item);
}

// function to update values
function updateValues() {
    const total = transactions.map(item => item.amount);
    console.log(total, "total");

    
}


form.addEventListener("submit", addTransaction);