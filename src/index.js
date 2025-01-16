import * as stack from "./stack.js";

window.onload = function () {
  console.log("done");

  var pop = document.getElementById("pop");
  var push = document.getElementById("push");
  var peek = document.getElementById("peek");
  var display = document.getElementById("top_of_stack");

  // lägger till en lyssnare för click och tar bort det översta elementet. Meddelande visas
  pop.addEventListener("click", function () {
    var text = "Tog bort " + stack.pop();
    alert(text);
  });

  // lägger till en lyssnare för click och lägger till ett element. Meddelande visas
  push.addEventListener("click", function () {
    var x = prompt("Vad ska vi lägga på stacken?");
    stack.push(x);
    display.innerHTML = x;
  });

  // lägger till en lyssnare för click
  peek.addEventListener("click", function () {
    display.innerHTML = stack.peek();
  });
};
