
// converting string stored in local storage to an object. Using the logical OR operator to provide value of an empty array if local storage returns undefined
var searchResults = JSON.parse(localStorage.getItem("cities")) || []

// using getElementById method to retrieve elements from HTML document.
var searchHistory = document.getElementById("search-history")
function renderedSearchHistory() {
    // Using loop to iterate through search history array. Each iteration is creating a new button and setting attributes to text content.
    for (var i = 0; i < searchResults.length; i++) {
        // var btn = document.createElement("button");
        // btn.setAttribute("type", 'button');
        // btn.classList.add('history-btn', 'btn-history');
        // btn.textContent = searchResults[i];
        // searchHistory.appendChild(btn);
        createSearchHistoryButton(searchResults[i]);


    }

};

renderedSearchHistory();


function createSearchHistoryButton(searchResult) {
    var btn = document.createElement("button");
        btn.setAttribute("type", 'button');
        btn.classList.add('history-btn', 'btn-history');
        btn.textContent = searchResult;
        searchHistory.appendChild(btn);
}

// var weatherAPI = "c8330eb00312be5b361b892afad888cb"








// day.js timezone plugins
// dayjs.extend(window.dayjs_plugin_timezone);
// dayjs.extend(window.dayjs_plugin_utc);


var formElement = document.getElementById ("form-1");
var API = "c8330eb00312be5b361b892afad888cb"
formElement.addEventListener ("submit", function(event){
    
    
    event.preventDefault ();

   

    var city = document.getElementById ("city").value
    searchResults.push(city)
    getForcast(city);
    fiveDayForcast(city);
    localStorage.setItem ("cities", JSON.stringify(searchResults));

    createSearchHistoryButton(city);

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
    <li class="list-group-item">Temp: ${apiData.main.temp} <img src="https://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png" /></li>
    <li class="list-group-item">Humidity:${apiData.main.humidity}</li>
    <li class="list-group-item">Wind: ${apiData.wind.speed}</li>
    <li class="list-group-item">Humidity:${apiData.weather[0].description}</li>
  </ul>
</div>`
document.getElementById("today").innerHTML = html 
    })


}


function fiveDayForcast(city) {

    fetch(`https:api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API}&units=imperial`)
    .then(response => response.json())
    .then(apiData => {
        console.log(apiData);
//         var html =`
//         <h2>${city}(${moment().format('D/M/YYYY')})</h2>
//     <div class="card" style="width: 18rem;">
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">Temp: ${apiData.main.temp} <img src="https://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png" /></li>
//     <li class="list-group-item">Humidity:${apiData.main.humidity}</li>
//     <li class="list-group-item">Wind: ${apiData.wind.speed}</li>
//     <li class="list-group-item">Humidity:${apiData.weather[0].description}</li>
//   </ul>
// </div>`
// document.getElementById("today").innerHTML = html 
    })


}











// var formElement = document.getElementById("form-1");
// const API = "c8330eb00312be5b361b892afad888cb";
// formElement.addEventListener("submit", function (event) {
//   event.preventDefault();

//   var city = document.getElementById("city").value;
//   getForcast(city);
//   getCoordinates(city);
// });


// function getForcast(city) {
//   fetch(
//     `api.openweathermap.org/data/2.5/forecast?lat=${city}&lon=${city}&appid=${API}`
//   )
//     .then(response => response.json())
//     .then(apiData => {
//       console.log(apiData);
//       var html = `
//         <h2>${city}(${moment().format("D/M/YYYY")})</h2>
//     <div class="card" style="width: 18rem;">
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">Temp: ${
//       apiData.main.temp
//     } <img src="https://openweathermap.org/img/wn/${
//         apiData.weather[0].icon
//       }@2x.png" /></li>
//     <li class="list-group-item">Humidity:${apiData.main.humidity}</li>
//     <li class="list-group-item">Wind: ${apiData.wind.speed}</li>
//     <li class="list-group-item">Humidity:${apiData.weather[0].description}</li>
//   </ul>
// </div>`
//       document.getElementById("today").innerHTML = html;
//     })
// }

// function fiveDayForcast(city) {

//     fetch(`https:api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API}&units=imperial`)
//     .then(response => response.json())
//     .then(apiData => {
//         console.log(apiData);
//         var html =`
//         <h2>${city}(${moment().format('D/M/YYYY')})</h2>
//     <div class="card" style="width: 18rem;">
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">Temp: ${apiData.main.temp} <img src="https://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png" /></li>
//     <li class="list-group-item">Humidity:${apiData.main.humidity}</li>
//     <li class="list-group-item">Wind: ${apiData.wind.speed}</li>
//     <li class="list-group-item">Humidity:${apiData.weather[0].description}</li>
//   </ul>
// </div>`
// document.getElementById("today").innerHTML = html
//     })

// }



//Verify that the URLs in the fetch requests are correct and that the API key is still valid.
//Once the coordinates are obtained, you should call the getForcast() function with the city's latitude and longitude as arguments instead of city name.
//Handle any errors that might occur during the fetch requests, such as when the API key is invalid or when the city is not found.
//Build a more complex and complete interface to show more weather data.
//Implement an ability to switch between metric and imperial units.
//Add further function to cover different date and time to show the forecast of the next upcoming days.
//Add some sort of caching mechanism to prevent re-fetching the same data each time the same city is requested.




// function fiveDayForcast(city) {

//     fetch(`https:api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API}&units=imperial`)
//     .then(response => response.json())
//     .then(apiData => {
//         console.log(apiData);
//         var html =`
//         <h2>${city}(${moment().format('D/M/YYYY')})</h2>
//     <div class="card" style="width: 18rem;">
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">Temp: ${apiData.main.temp} <img src="https://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png" /></li>
//     <li class="list-group-item">Humidity:${apiData.main.humidity}</li>
//     <li class="list-group-item">Wind: ${apiData.wind.speed}</li>
//     <li class="list-group-item">Humidity:${apiData.weather[0].description}</li>
//   </ul>
// </div>`
// document.getElementById("today").innerHTML = html
//     })

// }

// function getCoordinates(city) {
//   fetch(
//     `http://api.openweathermap.org/geo/1.0/direct?q=${city},GA,USA&limit=1&appid=c8330eb00312be5b361b892afad888cb`
//   )
//     .then((response) => response.json())
//     .then((apiData) => {
//       console.log(apiData);
//     });
// }
