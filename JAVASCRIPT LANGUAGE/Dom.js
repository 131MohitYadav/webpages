
// homework question 
// what is hoisting
// what is ES6 AND ECMA

// return single node 
let head = document.getElementById("head")
console.log(head);

document.write(" <i>Hello Mohit Yadav</i>")
// return nodelist in array format same as document.getElementsByTagName
let head2 = document.getElementsByClassName("content2")
console.log(head2); // it does not change any text
head2[1].innerHTML = "<i>Aman kumar </i>"
head2[2].textContent = " Manish Kumar"

