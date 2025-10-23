let firstT = document.getElementById("first-t");
let list = document.getElementById("transactionList");
let balance = 0;
let entries = [];

let addT = document.getElementById("addT");

function addTransaction() {
 renderT();
}


function renderT() {
    firstT.textContent = typeT.textContent + " " + amountT.textContent + " " + dateT.textContent + " " + categoryT.textContent;
    console.log(firstT.textContent)
}

console.log("welcome")

addT.addEventListener("click", () => {
    event.preventDefault();
    let typeT = document.getElementById("type").value;
    let amountT = document.getElementById("amount").value;
    let dateT = document.getElementById("dateT").value;
    let categoryT = document.getElementById("categoryT").value;
    let deleteBtn = document.getElementById("del");
    let li = document.createElement("li");


    let task = {typeT, dateT, amountT, categoryT};
    entries.push(task);
    renderEntries();

    li.appendChild(info);
    list.appendChild(li);
    firstT.appendChild(list);
    firstT.style.color = "#fff";
    // console.log(info.textContent);
}
);


function deleteBtn(index) {
    del.addEventListener("click", (index)=> {
        entries.splice(index,1);
        renderEntries();
    })
}
function renderEntries() {
    let info = document.createElement("div");
    
    entries.forEach((task, index) => {

    if(task.typeT === "income") {
    info.innerHTML = `
    <div class="flex-log">
    <div class="left-flex">
    <i class="fa-solid fa-circle-up" id="inc"></i>
        <div id="title">
            <h4>${task.categoryT}</h4>
            <small>${task.dateT}</small>
        </div>
    </div>
    <div class="right-flex">
    <h2>+$${task.amountT}</h2>
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
            <h4>${categoryT}</h4>
            <small>${dateT}</small>
        </div>
    </div>
    <div class="right-flex">
    <h2>-$${amountT}</h2>
        <i class="fa-solid fa-circle-xmark" id="del" onclick="deleteBtn(${index})"></i>
    </div>
    </div>
    `
    }

    });
    return li;

}


