// 1. Start with an array of strings
let todoItems = ["grapes", "bread", "tea"];


// 2. Create variables for DOM elements
const addItemButton = document.getElementById("add-item-button");
const itemInput = document.getElementById("text");
const list = document.getElementById("list");
const sortBtn = document.getElementById("sort");
const clearBtn = document.getElementById("clear");


// 3. Function to display items
function updateList() {
    list.innerHTML = "";

    todoItems.forEach(function (item, index) {
        const li = document.createElement("li");
        li.textContent = item;

        // remove item when clicked
        li.addEventListener("click", function () {
            todoItems.splice(index, 1);
            updateList();
        });

        list.appendChild(li);
    });
}

updateList();


// 4. Add new item
addItemButton.addEventListener("click", function () {
    const newItem = itemInput.value.trim();

    if (newItem !== "") {
        todoItems.push(newItem);
        itemInput.value = "";
        updateList();
    }
});


// 5. Sort alphabetically
sortBtn.addEventListener("click", function () {
    todoItems.sort();
    updateList();
});


// 6. Clear all items
clearBtn.addEventListener("click", function () {
    todoItems = [];
    updateList();
});