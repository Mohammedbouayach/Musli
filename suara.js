import {displaySurahs, fetchSurahList} from './surahList.js';



const searchBox = document.querySelector('.searchBox input'),
sortable = document.querySelector('#select-order');


// Event listeners
searchBox.addEventListener('keyup', displaySurahs);
sortable.addEventListener('change', displaySurahs);

// Call the function to fetch the data
fetchSurahList();




// set Search params in URL when we search by input value
searchBox.addEventListener('keyup', () => {
    const params = new URLSearchParams(window.location.search);
    params.set('search', searchBox.value);
    window.history.replaceState({}, '', `${location.pathname}?${params}`);
    displaySurahs();
});

// set as input value
searchBox.value = new URLSearchParams(window.location.search).get('search');


// set order params in URL when we select order value
sortable.addEventListener('change', () => {
    const params = new URLSearchParams(window.location.search);
    params.set('order', sortable.value);
    window.history.replaceState({}, '', `${location.pathname}?${params}`);
    displaySurahs();
});

// set as selected value
sortable.value = new URLSearchParams(window.location.search).get('order'); 





