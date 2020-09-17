
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
            document.getElementById("name").innerHTML = data.city.name + ", " + data.city.country;
            getTemps(lat,lon);


        })

}
const oneCallUrl = "https://api.openweathermap.org/data/2.5/onecall?lat="

function getTemps(lat, lon){ fetch(oneCallUrl + lat + "&lon=" + lon + "&units=metric&appid=" + key)
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
        let iconTwo = data.daily[1].weather[0].icon;
        //console.log(descTwo);
        let dayThree= data.daily[2].temp.day;
        let descThree = data.daily[2].weather[0].description;
        let iconThree = data.daily[2].weather[0].icon;
        //console.log(dayThree);
        let dayFour = data.daily[3].temp.day;
        let descFour = data.daily[3].weather[0].description;
        let iconFour = data.daily[3].weather[0].icon;
        //console.log(dayFour);
        let dayFive = data.daily[4].temp.day;
        let descFive = data.daily[4].weather[0].description;
        let iconFive = data.daily[4].weather[0].icon;
        //console.log(dayFive);

        display(dayOne, descOne, iconOne, dayTwo, descTwo, iconTwo,
                dayThree, descThree, iconThree, dayFour, descFour, iconFour, dayFive, descFive, iconFive);

    })

}

const iconUrl = "http://openweathermap.org/img/wn/"

function display(dayOne, descOne, iconOne, dayTwo, descTwo, iconTwo, dayThree, descThree, iconThree,
                 dayFour, descFour, iconFour, dayFive, descFive, iconFive ){
    document.getElementById("temp1").innerHTML = Math.round(dayOne) + "°C";
    console.log(dayOne);
    document.getElementById("desc1").innerHTML = descOne;
    document.getElementById("icon1").src = iconUrl+ iconOne + "@2x.png";

    document.getElementById("temp2").innerHTML = Math.round(dayTwo) + "°C";
    document.getElementById("desc2").innerHTML = descTwo;
    document.getElementById("icon2").src = iconUrl + iconTwo + "@2x.png";

    document.getElementById("temp3").innerHTML = Math.round(dayThree) + "°C";
    document.getElementById("desc3").innerHTML = descThree;
    document.getElementById("icon3").src = iconUrl + iconThree + "@2x.png";

    document.getElementById("temp4").innerHTML = Math.round(dayFour) + "°C";
    document.getElementById("desc4").innerHTML = descFour;
    document.getElementById("icon4").src = iconUrl + iconFour + "@2x.png";

    document.getElementById("temp5").innerHTML = Math.round(dayFive) + "°C";
    document.getElementById("desc5").innerHTML = descFive;
    document.getElementById("icon5").src = iconUrl + iconFive + "@2x.png";
}


document.getElementById("run").addEventListener("click", getWeather)