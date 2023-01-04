// document.body.innerHTML = "Heeeyyyy buddy";
// document.querySelector("p").innerHTML = "Testing";
// document.getElementById("tests").innerHTML = "Testing";
// document.getElementsByClassName("returns_arr")[0].innerHTML = "Testing";
// document.getElementsByTagName("returns_arr2")[1].innerHTML = "Testing";

function test(docElement) {
  docElement.style.backgroundColor = "blue";
}

const toggleHiddenElement = (domElement) => {
  if (domElement.style.display === "none") {
    domElement.style.display = "block";
  } else {
    domElement.style.display = "none";
  }
};

const resources = {
  test,
  toggleHiddenElement,
};

console.log("I'm learning about");

for (let idx = 0; idx < 999999999; idx++) {}

// The second console.log() statement is
// delayed by the for loop's execution
console.log("the Event Loop");

// export default resources;
// Or
//  export { resources as default };

// Check testing.js to see how we import!
