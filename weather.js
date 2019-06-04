const weather = document.querySelector('.js-weather');

const API_KEY = "2d8b2c86b8e7db18a4e20bce5c8ab411";
const COORDS = 'coords';

function getWeather(lat,lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json()
    }).then(function(json){
        //console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handelGeoError(position){
    console.log('위치 정보를 가져올 수 없습니다.');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handelGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        //getWeather 함수 호출
        const parsedCoords = JSON.parse(loadedCoords);
        //console.log(parseCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();