const btn = document.querySelector('.btn'); 
const requestURL = 'https://picsum.photos/v2/list?limit=10';
const showResultHtml = document.querySelector('.result');


function useRequest(url, callback){

    let xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.onload = function(){

        if (xhr.status != 200){
            console.log('Статус ответа: ', xhr.status);
        } else {

            let result = JSON.parse(xhr.response);

            if (callback)
                callback(result);

        }
    };

    xhr.onprogress = function(event){

        console.log(`Загружено ${event.loaded} из ${event.total}`);
    };

    xhr.onerror = function(){

        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    xhr.send();
};


function displayResult(apiData){

    let cards = '';

    apiData.forEach(item => {

        const cardBlock = `
        
        <div class="card">
            <img src="${item.download_url}" class="card_image" />

            <p> ${item.author} </p>
        </div>
        `;
       
        cards += cardBlock;
    });

    showResultHtml.innerHTML = cards;
};

btn.addEventListener('click', function(){

    let getParam, getUrl;

    const inputValue = document.querySelector('.input').value;

    if (inputValue < 1 || inputValue > 10){
        console.log('Число вне диапазона от 1 до 10');
    } else {

        // Получение ссылки
        getParam = requestURL.split('=');
        getParam[1] = inputValue;
        getUrl  = getParam.join('=');
        

        useRequest(getUrl, displayResult);
    }
}); 


