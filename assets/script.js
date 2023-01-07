var formElement = document.getElementById ("form-1");
const API = "c8330eb00312be5b361b892afad888cb"
formElement.addEventListener ("submit", function(event){
    event.preventDefault ();

    var city = document.getElementById ("city").value
    getForcast(city);
})


function getForcast(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=imperial`)
    .then(response => response.json())
    .then(apiData => {
        console.log(apiData);
        var html =`
        <h2>${city}(${moment().format('D/M/YYYY')})</h2>
    <div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Temp: ${apiData.main.temp} <img src="http://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png" /></li>
    <li class="list-group-item">Humidity:${apiData.main.humidity}</li>
    <li class="list-group-item">Wind: ${apiData.wind.speed}</li>
    <li class="list-group-item">Humidity:${apiData.weather[0].description}</li>
  </ul>
</div>`
document.getElementById("today").innerHTML = html 
    })


}
