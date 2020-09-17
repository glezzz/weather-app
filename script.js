
const key = config.MY_KEY;
const url = "http://api.openweathermap.org/data/2.5/forecast?q=";

function getWeather() {
    let city = document.getElementById("city").value;
    fetch(url + city + "&units=metric&appid=" + key)
        .then(response => response.json())
        .then(weather => {
            console.log(weather);


            console.log(weather.list);
        })


}


document.getElementById("run").addEventListener("click", getWeather)