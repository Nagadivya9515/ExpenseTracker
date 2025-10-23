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
        <i class="fa-solid fa-circle-xmark" onclick="deleteBtn(${index})"></i>
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
        <i class="fa-solid fa-circle-xmark" id="del" onclick="deleteBtn(${index})"></i>
    </div>
    </div>
    `
    }

    li.appendChild(info);
    return li;

}