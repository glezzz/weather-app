
const key = config.MY_KEY;
const url = "http://api.openweathermap.org/data/2.5/forecast?q=";

function getWeather() {
    let city = document.getElementById("city").value;
    fetch(url + city + "&units=metric&appid=" + key)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let name = data.city.name;
            let lon = data.city.coord.lon;
            let lat = data.city.coord.lat;
            console.log(name + " " + lon + " " + lat);
            getTemps(lat,lon);


        })

}

function getTemps(lat, lon){ fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=metric&appid=" +key)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let dayOne = data.current.temp;
        let descOne = data.daily[0].weather[0].description;
        let iconOne = data.daily[0].weather[0].icon;
        console.log(dayOne);
        //console.log(descOne);
        let dayTwo = data.daily[1].temp.day;
        let descTwo = data.daily[1].weather[0].description;
        //console.log(descTwo);
        let dayThree= data.daily[2].temp.day;
        let descThree = data.daily[2].weather[0].description;
        //console.log(dayThree);
        let dayFour = data.daily[3].temp.day;
        let descFour = data.daily[3].weather[0].description;
        //console.log(dayFour);
        let dayFive = data.daily[4].temp.day;
        let descFive = data.daily[4].weather[0].description;
        //console.log(dayFive);

        display(dayOne, descOne, dayTwo, descTwo, dayThree, descThree, dayFour, descFour);

    })

}

function display(dayOne, descOne, dayTwo, descTwo, dayThree, descThree, dayFour, descFour){
    document.getElementById("temp").innerHTML = dayOne;
    document.getElementById("desc").innerHTML = descOne;
    document.getElementById("desc").innerHTML =
}


document.getElementById("run").addEventListener("click", getWeather)