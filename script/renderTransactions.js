let entries = [];


function renderTransactions() {
let list = document.getElementById("transactionList");

    list.innerHTML = "";
    entries.forEach((transaction, index) => {
        list.appendChild(createTransactionElement(transaction, index));
    })
}