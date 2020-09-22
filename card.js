let btPlus = Array.from(document.getElementsByClassName("btnPlus"));
let btMoins = Array.from(document.getElementsByClassName("btnMoins"));
let cpt = Array.from(document.getElementsByClassName("counter"));
let carte=document.querySelectorAll('.card');
let Prices = Array.from(document.querySelectorAll(".fa-dollar"));
let total = document.querySelector("#price");
let supprimer= document.querySelectorAll('.delete')
//let like=Array.from(document.querySelectorAll('.loveicon'))

//events&function

for (let i = 0; i < carte.length; i++) {




  btPlus[i].addEventListener("click", function () {
    cpt[i].innerHTML < 15 ? cpt[i].innerHTML++ : alert("out of stock");
    calculation()
  });

  btMoins[i].addEventListener("click", function () {
    cpt[i].innerHTML > 0
      ? cpt[i].innerHTML--
      : alert("you have reached 0 request");
      calculation()

  });
  
  supprimer[i].addEventListener('click',function (){
  
  supprimer[i].parentElement.parentElement.parentElement.parentElement.remove();
console.log (supprimer.length)
  calculation(); 
    
  })
 
}

 
/* like[i].addEventListener('click',function(){
    like[i].style.color='red';
  })*/

//total of articles
function calculation() {
 
  let x = 0;
  for (var i = 0; i < supprimer.length; i++) {
   
   x += parseFloat(Prices[i].innerText) * parseFloat(cpt[i].innerHTML);
  }
  return (total.innerHTML = x.toFixed(2));
}
/*function total (){
  let x=0;
  for(var i=0;)*/

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
