let counter = 0
let searchButton = document.getElementById("search")
let firstCountry = document.getElementById("first")
let secondCountry = document.getElementById("second")
let thirdCountry = document.getElementById("third")
firstCountry.addEventListener("click", searchedCountry)
secondCountry.addEventListener("click", searchedCountry2)
thirdCountry.addEventListener("click", searchedCountry3)
let searchedCountries = [firstCountry, secondCountry, thirdCountry]
searchButton.addEventListener("click", weatherToday)

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function weatherToday() {
    let city = document.getElementById("haku").value
    let xhttp = new XMLHttpRequest();
    let errorMsg = document.getElementById("error")

    xhttp.onreadystatechange = function() {

        errorMsg.innerHTML = "";
        let weather = JSON.parse(this.response)
	    if (this.readyState == 4 && this.status == 200) {
	     
            // Access the result here
            document.getElementById("searchedcity").innerHTML = weather.name + " , " + weather.sys.country;
            document.getElementById("weather").innerHTML =  "Lämpötila nyt: " + Math.round(weather.main.temp) + "&deg;";
            document.getElementById("feelslike").innerHTML = "Tuntuu kuin: " + Math.round(weather.main.feels_like) + "&deg;";
            document.getElementById("lowest").innerHTML = "Alin lämpötila: " + Math.round(weather.main.temp_min) + "&deg;";
            document.getElementById("highest").innerHTML = "Ylin lämpötila: " + Math.round(weather.main.temp_max) + "&deg;";
            document.getElementById("desc").innerHTML = "Kuvaus: " + weather.weather[0].description;
            document.getElementById("wind").innerHTML = "Tuuli: " + weather.wind.speed + " m/s";
            document.getElementById("cloudiness").innerHTML = "Pilvisyys: " + weather.clouds.all + "%";

            if (counter == 3) {
                counter = 0
            }
            searchedCountries[counter].innerHTML = city;
            counter++
        }
        
        else {
        errorMsg.innerHTML = "Kaupunkia ei löytynyt";
        return;
    }
    };
    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=+" + city + "&units=metric&appid=377080a829c7f0df00f8dfbd81bca2ff&lang=fi", true);
    xhttp.send();
    }


    
function searchedCountry() {
    document.getElementById("haku").value = firstCountry.innerText
    weatherToday();
}

function searchedCountry2() {
    document.getElementById("haku").value = secondCountry.innerText
    weatherToday();
}

function searchedCountry3() {
    document.getElementById("haku").value = thirdCountry.innerText
    weatherToday();
}