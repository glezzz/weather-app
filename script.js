
const key = config.MY_KEY;
let url = "http://api.openweathermap.org/data/2.5/forecast?q=";

function getWeather() {
    let city = document.getElementById("city").value;
    fetch(url + city + "&units=metric&appid=" + key)
        .then(response => response.json())
        .then(weather => {
            console.log(weather);

            let nextFive = weather.list.slice(0, 5);     // .slice() method to get a portion of the array
            console.log(nextFive);

        })


}


document.getElementById("run").addEventListener("click", getWeather)