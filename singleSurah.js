const main = document.querySelector('main');

const tyeps =document.querySelector('tyeps');

export const id = new URLSearchParams(window.location.search).get('id');


export async function fetchSingleSurah(api){
    let res = await fetch(api);
    let {data} = await res.json();
    let {ayahs} = data;
    
    
    main.innerHTML = `
    <div class="surahInfo">
    <div class="name">
        <h1>${data.name} </h1>
    </div>
    <div class="info">
    
        <p>  <span>عدد الأيات: ${data.numberOfAyahs} </span> </p>
    </div>
    </div>
    <hr/>
    <div class="singleSurah">
            <div class="name">
               
            </div>
            <ul class="ayat">
                ${
                    ayahs
                    .map((item)=>`
                     <li> ﴾ ${item.text} ﴿
                     <span>(${item.numberInSurah})</span> </li>
                  `).join(' ')
                }
            </ul>
    </div>
    `;
    
    
}