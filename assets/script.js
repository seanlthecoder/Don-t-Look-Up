
// converting string stored in local storage to an object. Using the logical OR operator to provide value of an empty array if local storage returns undefined
var searchResults = JSON.parse(localStorage.getItem("cities")) || []

// using getElementById method to retrieve elements from HTML document.
var searchHistory = document.getElementById("search-history")
function renderedSearchHistory() {
    // Using loop to iterate through search history array. Each iteration is creating a new button and setting attributes to text content.
    for (var i = 0; i < searchResults.length; i++) {
      
        createSearchHistoryButton(searchResults[i]);


    }

};

renderedSearchHistory();


function createSearchHistoryButton(searchResult) {
    var btn = document.createElement("button");
        btn.setAttribute("type", 'button');
        btn.classList.add('history-btn', 'btn-history');
        btn.addEventListener("click",getData)
        btn.textContent = searchResult;
        searchHistory.appendChild(btn);
}








function getData(event) {
    console.log( event.target.textContent)
    getForcast(event.target.textContent)
    fiveDayForcast(event.target.textContent)

}




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
        <div class="card" style="width: 28rem;">
        <h2>${city}(${moment().format('M/D/YYYY')})</h2>
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
        var html =""
    for (let i=0;i<apiData.list.length;i = i+8){
         html +=`
         <div class="card" style="width: 18rem;">
         <h2>${moment(apiData.list[i].dt_txt).format('M/D/YYYY')}</h2>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Temp: ${apiData.list[i].main.temp} <img src="https://openweathermap.org/img/wn/${apiData.list[i].weather[0].icon}@2x.png" /></li>
    <li class="list-group-item">Humidity:${apiData.list[i].main.humidity}</li>
    <li class="list-group-item">Wind: ${apiData.list[i].wind.speed}</li>
    <li class="list-group-item">Humidity:${apiData.list[i].weather[0].description}</li>
  </ul>
</div>`
    }
document.getElementById("forecast").innerHTML = html 
    })


    
}

