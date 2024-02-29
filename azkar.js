let azkarindex = 0;
    
getadkar()
    function getadkar(){
     fetch("https://api.dikiotang.com/dzikir/pagi").then(response=>response.json()).then(data=>{
     //console.log(data)
       let azkar = data.data;
      let azkarcontainer= document.querySelector(".azkar-container");
      let azkars = document.querySelector(".azkars");
      let numberazkar= document.querySelector(".numberazkar")
console.log(azkar[azkarindex].arab)
      
      azkars.innerText = azkar[azkarindex].arab;
      
      numberazkar.innerHTML=`(${azkar[azkarindex].ulang})`
      
      console.log(data)
      
      
     })
     
     
    }
    
    let moveleft = document.querySelector("#moveleft")
        let moveright = document.querySelector("#moveright")
    
    moveleft.onclick = function(){
     if (azkarindex<22) {
      azkarindex +=1
     }
     getadkar()
    };
    
    moveright.onclick = function(){
     if (azkarindex>0) {
      azkarindex -=1
     }
     getadkar()
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
  