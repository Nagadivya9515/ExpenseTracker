function deleteTransaction(index) {
    entries.splice(index, 1);
    renderTransactions();
}