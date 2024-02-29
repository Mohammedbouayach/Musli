
let ahadith = document.querySelector(".ahadith");
let ahadithsection= document.getElementById("ahadith")

let next = document.querySelector(".buttons .next");

let prev = document.querySelector(".buttons .prev")

let numberahadith = document.querySelector(".numberahadith");

let btnmove = document.getElementById("btnmove");

let ahadithindex = 0;

//btnmove.addEventListener("click",()=>{
// ahadithsection.scrollIntoView();
//}
//)

hadithnumber()

function hadithnumber(){
 fetch("https://api.hadith.gading.dev/books/muslim?range=1-300").then(response=>response.json()).then(data=>{
  let adiths= data.data.hadiths;
  ahadith.innerText = adiths[ahadithindex].arab
 })
 
 numberahadith.innerText = `300 / ${ahadithindex +1}`
}

next.onclick = ()=>{
if (ahadithindex < 300) {
  ahadithindex += 1;
}
 hadithnumber()
}
prev.onclick = ()=>{
 if (ahadithindex >0) {
  ahadithindex -= 1;
 }
 hadithnumber()
}

let back = document.querySelector(".back-to-top");
 
  window.addEventListener("scroll",()=>{
    if(scrollY >= 400){
      back.style.display="flex"
    }
    else{
      back.style.display="none"
    }
    
  })
  