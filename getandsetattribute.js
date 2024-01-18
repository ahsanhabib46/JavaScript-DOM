//get and set attributes

const link=document.querySelector("a");
console.log(link.getAttribute("href").slice(1));
//set attribute
link.setAttribute("href", "https://codprog.com");
console.log(link.getAttribute("href"));

// const inputElement=document.querySelector(".form-add input");
// console.log(inputElement.getAttribute("type"));