const apiKey ="a5150bdb0e273968fd3b520805a1e15e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=berlin";

async function  checkWeather(){
    const response =await fetch(apiUrl + `&appid=${apiKey}`);
    var data= await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;
}
checkWeather();