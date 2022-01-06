
let button = document.getElementById("search")

button.addEventListener("click", weatherToday)

function weatherToday() {
    let city = document.getElementById("haku").value
    let searchedCity = document.getElementById("city")
    let xhttp = new XMLHttpRequest();
    let errorMsg = document.getElementById("error")

    xhttp.onreadystatechange = function() {
        errorMsg.innerHTML = "";
        let weather = JSON.parse(this.response)
	    if (this.readyState == 4 && this.status == 200) {
	     // Access the result here
         document.getElementById("city").innerHTML = weather.name + "<br>"
	     document.getElementById("weather").innerHTML =  "Lämpötila nyt: " + Math.round(weather.main.temp) + "<br>" + "Tuntuu kuin: " + Math.round(weather.main.feels_like);
        }
        
        if (searchedCity.innerHTML === "") {
        errorMsg.innerHTML = "Kaupunkia ei löytynyt";
        return;
    }
    };
    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=+" + city + "&units=metric&appid=377080a829c7f0df00f8dfbd81bca2ff", true);
    xhttp.send();
    }


    


