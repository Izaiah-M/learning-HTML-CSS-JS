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

export default resources;
// Or
//  export { resources as default };

// Check testing.js to see how we import!
