
function getWeather() {
    let city = document.getElementById("city").value;
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" /* + key*/)
    
}