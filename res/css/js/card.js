let btPlus = Array.from(document.getElementsByClassName("btnPlus"));
let btMoins = Array.from(document.getElementsByClassName("btnMoins"));
let cpt = Array.from(document.getElementsByClassName("counter"));
let carte=document.querySelectorAll('.card');
let Prices = Array.from(document.querySelectorAll(".fa-dollar"));
let total = document.querySelector("#price");
let supprimer= document.querySelectorAll('.delete')
//let like=Array.from(document.querySelectorAll('.loveicon'))

//events&function

for (let i = 0; i < Prices.length; i++) {

//incrementation 
  btPlus[i].addEventListener("click", function () {
    cpt[i].innerHTML < 15 ? cpt[i].innerHTML++ : alert("out of stock");
    calculation()
  });
//decrementation 
  btMoins[i].addEventListener("click", function () {
    cpt[i].innerHTML > 0
      ? cpt[i].innerHTML--
      : alert("you have reached 0 request");
      calculation()

  });
  //function remove
  supprimer[i].addEventListener('click',function (){
  supprimer[i].parentElement.parentElement.parentElement.parentElement.remove();
  calculation();
})};

 
/* like[i].addEventListener('click',function(){
    like[i].style.color='red';
  })*/

//total of articles
function calculation() {
  let p = Array.from(document.querySelectorAll(".fa-dollar"));
  let q = Array.from(document.getElementsByClassName("counter"));
  let x = 0;
  for (let i = 0; i < p.length; i++) {
   
   x =x+ parseFloat(p[i].innerHTML.replace("£","")) * parseFloat(q[i].innerHTML);
  }
  return (total.innerHTML = x.toFixed(2));
}

//change color of heart
var heart = Array.from(document.getElementsByClassName("fa-heart"));
heart.forEach((element) => {
  element.addEventListener("click", function () {
    if (element.style.color == "pink") {
      element.style.color = "red";
    } else {
      element.style.color = "pink";
    }
  });
});
