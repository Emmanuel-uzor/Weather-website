let input = document.getElementById("input")
let button = document.getElementById("button")
let cityName = document.getElementById("cityName")
let temperature = document.getElementById("deg")
let humidity = document.getElementById("humidity")
let status = document.getElementById("status")
let icon = document.getElementById("icon")
let parent = document.getElementById("parent")
let api = "d8ac5db56623aa01b0c6ee1f4071880d"


let neww = document.createElement("h4")
parent.prepend(neww)
neww.classList.add("neww")

button.onclick = function (params) {
    let value = input.value
    function disp(params) {
        cityName.style.display = params
        humidity.style.display = params
        temperature.style.display = params
        status.style.display = params
        icon.style.display = params
    }
    
    if (value === "") {
        parent.style.display = "inline-block"
        neww.textContent = "Enter a city"
        disp("none")
    } else {
            
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${api}`)
            .then(response => response.json())
            .then(value => {
                parent.style.display = "inline-block"
                if (value.message === "city not found" || value.cod === 404) {

                    neww.textContent = "City not found";
                    disp("none")
                    
                }else{
                    neww.textContent = ""

                    console.log(value.sys);
                    let name = value.name
                    let humidit = value.main.humidity
                    cityName.textContent = name
                    let temp = (value.main.temp - 273.15).toFixed(1)
                    let weather = value.weather[0].description
                    
                    humidity.textContent = `humidity: ${humidit}%`
                    temperature.textContent = `${temp}°F`
                    status.textContent = weather
                    disp("block")
                    let idf = value.weather[0].id

                    if (idf >= 200 && idf<300) {
                        icon.textContent = "⚡"
                        icon.style.display = "block"
                    } else if (idf >= 300 && idf<400) {
                        icon.textContent = "☔"
                        icon.style.display = "block"
                    } else if (idf >= 400 && idf<500) {
                        icon.textContent = "☔"
                        icon.style.display = "block"
                    } else if (idf >= 500 && idf<600) {
                        icon.textContent = "☔"
                        icon.style.display = "block"
                    } else if (idf >= 600 && idf<700) {
                        icon.textContent = "🌀"
                        icon.style.display = "block"
                    } else if (idf >= 700 && idf<800) {
                        icon.textContent = "⛅"
                        icon.style.display = "block"
                    }else if(idf == 800){
                        icon.textContent = "🌞"
                        icon.style.display = "block"
                    } else if (idf > 800 && idf<900) {
                        icon.textContent = "⛅"
                        icon.style.display = "block"
                    }
                }
                
            })
            
    }
    
}