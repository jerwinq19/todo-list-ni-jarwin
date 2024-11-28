// getting element by id
const mybtn = document.getElementById("addBtn");
const myitem = document.getElementById("itemList");
const myinput = document.getElementById("add").value;

function myFunc() {
     // get the input value
     const myinput = document.getElementById("add").value;

     // creates a list element
     const newItem = document.createElement('li');
     // the value of the list element
     newItem.textContent = myinput;

     // checks if the user did not input instead it put nothing
     if (myinput === "") {
          alert("You must add something");
     } else {
          // append the input to the un ordered list
          myitem.appendChild(newItem);
          document.getElementById('add').value = "";
     }

   
}    