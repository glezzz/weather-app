
const key = config.MY_KEY;
run.addEventListener("click", getWeather())

function getWeather() {
    let city = document.getElementById("city").value;
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + key);
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    
}


