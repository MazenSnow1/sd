let x =  document.getElementById("password");

x.addEventListener("keyup", () => {
   if (x.value.length < 5){
     n.style.background = "red"
     n.style.border = "1px solid red"
    }else if (x.value.length > 5){
    n.style.background = "green"
    n.style.border = "1px solid green"
    n.style.transform = "translate(0%)"
  }
});
var n = document.querySelector(".Sb");

