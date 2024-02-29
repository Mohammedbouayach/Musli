let apiurl = "https://mp3quran.net/api/v3";
let lng = "ar";

async function getriciters(){
  
  let getQarie = document.querySelector("#getQarie")
  const res = await fetch(`${apiurl}/reciters?language=${lng}`)
  const data= await res.json()
  getQarie.innerHTML = `        <option value="">إختر القارئ</option>`
  data.reciters.forEach(riciter=>{
    
    getQarie.innerHTML += `        <option value="${riciter.id}">${riciter.name}</option>`
  });
  getQarie.addEventListener("change",(e)=>
    getMushaf(e.target.value)
  )
  
}
getriciters()

async function getMushaf(riciter){
  const res = await fetch(`${apiurl}/reciters?language=${lng}&reciter=${riciter}`)
  const data= await res.json()
  let moshafs=data.reciters[0].moshaf
  let getmushaf = document.querySelector("#getmushaf");
  getmushaf.innerHTML = `        <option value="">إختر المصحف</option>`
  moshafs.forEach(moshaf=>{
    
    getmushaf.innerHTML += `        <option value="${moshaf.id}" data-server="${moshaf.server}" data-surahList="${moshaf.surah_list}">${moshaf.name}</option>`
  });
  getmushaf.addEventListener("change",e=>{
    const selectmushaf = getmushaf.options[getmushaf.selectedIndex]
    
    let suraserver=selectmushaf.dataset.server;
  let suralist = selectmushaf.dataset.surahlist
getSurah(suraserver,suralist)
    
  })
  
}
async function getSurah(suraserver,suralist) {
  const getSura = document.querySelector("#getSura")
const res = await fetch(`https://mp3quran.net/api/v3/suwar`)
  const data= await res.json()
const suranemes = data.suwar;
suralist=suralist.split(",");
getSura.innerHTML = `        <option value="">إختر السورة</option>`
suralist.forEach(sura=>{
  let padsura = sura.padStart(3,'0')
  suranemes.forEach( suraname=>{
        if (suraname.id==sura) {
         
          getSura.innerHTML += `        <option value="${suraserver}${padsura}.mp3">${suraname.name}</option>`
        }
      }
    )
  
})
getSura.addEventListener("change",e=>{
    const selectsura = getSura.options[getSura.selectedIndex];
    playsura(selectsura.value)
    
})

}
function playsura(suramp3){
  let audioplayer = document.querySelector("#audioplayer");
  audioplayer.src=suramp3;
 audioplayer.play()

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
  