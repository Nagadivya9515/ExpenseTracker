function addTransaction() {
    event.preventDefault();
    let typeT = document.getElementById("type").value;
    let amountT = document.getElementById("amount").value;
    let dateT = document.getElementById("dateT").value;
    let categoryT = document.getElementById("categoryT").value;

    let task = {typeT, dateT, amountT, categoryT};
    entries.push(task);
    renderEntries();
}