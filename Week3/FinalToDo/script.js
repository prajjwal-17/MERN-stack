let ctr = 1;

function addTodo() {
    const inputEl = document.querySelector("input");
    const value = inputEl.value;

    if (value.trim()) { // Ensure the input is not empty
        const newDivEl = document.createElement("div");
        newDivEl.setAttribute("id", ctr);
        
        // Using template literals for cleaner string interpolation
        newDivEl.innerHTML = `<div>${value}</div><button onclick="deleteTo(${ctr})">Delete</button>`;
        
        document.querySelector("body").appendChild(newDivEl);
        ctr += 1;// this is done after so that it doesnt delete the element above required element
        inputEl.value = ""; // Clear input after adding
    } else {
        alert("Please enter a valid task.");
    }
}

function deleteTo(index) {
    console.log("delete called");
    const element = document.getElementById(index);
    element.parentNode.removeChild(element);
}
