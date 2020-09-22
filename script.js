
const key = config.MY_KEY;
const apiUrl = "http://api.openweathermap.org/data/2.5/forecast?q=";

function getWeather() {
    let city = document.getElementById("city").value;
    fetch(apiUrl + city + "&units=metric&appid=" + key)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            //let name = data.city.name;
            let lon = data.city.coord.lon;
            let lat = data.city.coord.lat;
            document.getElementById("name").innerHTML = data.city.name + ", " + data.city.country;
            getTemps(lat,lon);
        })

}

const oneCallUrl = "https://api.openweathermap.org/data/2.5/onecall?lat="

function getTemps(lat, lon){
    fetch(oneCallUrl + lat + "&lon=" + lon + "&units=metric&appid=" + key)
        .then(response => response.json())
        .then(data => {
            console.log("data", data)
            let days = [];

            for(let d = 0; d < 5; d++ ){

                let temp;
                if (d == 0) {
                    temp = data.current.temp;
                } else {
                    temp = data.daily[d].temp.day;
                }


                console.log("d daily", d, data.daily[d]);

                let weather = data.daily[d].weather[0];

                console.log("d weather", d, weather);

                let day = {
                    temp : temp,
                    description : weather.description,
                    icon : weather.icon,
                }

                days.push(day);
                console.log(day);
            }

            display(days);
          //  getAvg(data)

        })

}

const iconUrl = "http://openweathermap.org/img/wn/"

function display(days){
    for(let d = 0; d < days.length; d++) {
        let day = days[d];
        console.log(day);

        if (d == 0){
            document.getElementById("temp" + (d+1)).innerHTML = "Currently " + Math.round(day.temp) + "°C";
        } else {
            document.getElementById("avg-temp" + (d+1)).innerHTML = "Avg " + Math.round(day.temp) + "°C";
        }

        document.getElementById("desc" + (d+1)).innerHTML = day.description;
        document.getElementById("icon" + (d+1)).src = iconUrl+ day.icon + "@2x.png";
    }


}

document.getElementById("run").addEventListener("click", getWeather)