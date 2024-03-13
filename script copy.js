const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

// const dummyTransactions = [
//     {id: 1, text: "Flower", amount: -20},
//     {id: 2, text:"Salary", amount: 300},
//     {id: 3, text:"Book", amount: -30},
//     {id: 4, text:"Camera", amount: 150},
// ];


const localStorageTransactions = JSON.parse(localStorage.getItem("transactions"));

let transactions = localStorage.getItem("transactions") !== null ? localStorageTransactions : [];


// add transaction 
function addTransaction(e) {
    e.preventDefault();

    if (text.value.trim() === "" | amount.value.trim() === "") {
        alert("Please enter a text and amount");
    } else {
        const transaction = {
            id: generateID(),
            text: text.value,
            amount: +amount.value
        }

        transactions.push(transaction);
        addTransactionDOM(transaction);
        updateValues();
        updateLocalStorage();

        text.value = "";
        amount.value = "";
    }
}

// Generate random ID
function generateID() {
    return Math.floor(Math.random() * 100000000);
}

// Add transactions to DOM list
