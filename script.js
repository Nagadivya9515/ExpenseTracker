// let entries = [];
let bal = 0;
let income = 0;
let expenditure = 0;
let accountBal = document.getElementById("balance");
let incomeBal = document.getElementById("income");
let expBal = document.getElementById("expenditure")
incomeBal.textContent = "$0"
expBal.textContent = "$0"
accountBal.textContent = "$0";
let entries = JSON.parse(localStorage.getItem("entries") )|| [];


function renderTransactions() {
    let list = document.getElementById("transactionList");

    list.innerHTML = "";
    entries.forEach((transaction, index) => {
        list.appendChild(createTransactionElement(transaction, index));
    })
}

function addTransaction() {
    event.preventDefault();
    let typeT = document.getElementById("type").value;
    let amountT = parseInt(document.getElementById("amount").value);
    let dateT = document.getElementById("dateT").value;
    let categoryT = document.getElementById("categoryT").value;

    let transaction = {typeT, dateT, amountT, categoryT};
    

    if(transaction.typeT === "income") {
        bal += transaction.amountT;
        income += transaction.amountT;
    }
    else {
        if (bal == 0) {
            alert("Cannot spen with zero money");
            return;
        }
        bal -= transaction.amountT;
        expenditure += transaction.amountT;
    }
    
    entries.push(transaction);
    localStorage.setItem("entries", JSON.stringify(entries));

    accountBal.textContent = "$" + bal;
    incomeBal.textContent = "$+" + income;
    expBal.textContent = "$-" + expenditure;

    typeT = "";
    amountT = "";
    dateT = ""
    categoryT = ""
    renderTransactions();
}

function createTransactionElement(transaction, index) {
    let info = document.createElement("div");
    let li = document.createElement("li");

    if(transaction.typeT === "income") {
    info.innerHTML = `
    <div class="flex-log">
    <div class="left-flex">
    <i class="fa-solid fa-circle-up" id="inc"></i>
        <div id="title">
            <h4>${transaction.categoryT}</h4>
            <small>${transaction.dateT}</small>
        </div>
    </div>
    <div class="right-flex">
    <h2>+$${transaction.amountT}</h2>
        <i class="fa-solid fa-circle-xmark" onclick="deleteTransaction(${index})"></i>
    </div>
    </div>
    `
    }
    else {
        info.innerHTML = `
    <div class="flex-log">
    <div class="left-flex">
    <i class="fa-solid fa-circle-down" id="exp"></i>
        <div id="title">
            <h4>${transaction.categoryT}</h4>
            <small>${transaction.dateT}</small>
        </div>
    </div>
    <div class="right-flex">
    <h2>-$${transaction.amountT}</h2>
        <i class="fa-solid fa-circle-xmark" id="del" onclick="deleteTransaction(${index})"></i>
    </div>
    </div>
    `
        

    }

    li.appendChild(info);
    return li;

}

function deleteTransaction(index) {
    entries.splice(index, 1);
    localStorage.setItem("entries", JSON.stringify(entries));
    renderTransactions();
}