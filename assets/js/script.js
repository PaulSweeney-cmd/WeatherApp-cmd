var myapi = config.MY_API;

/* defining a variable complete with your API key assigned,
   key sourced from www.openweather.org */
let weather = {
    "api": myapi,
    
    /* function with a fetch method to extract information from the url */
    getWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.api
        )
        .then((response) => response.json())
        .then((data) => this.showWeather(data));
    },
    /* function to extract the json data from the api call & display the weather */
    showWeather: function(data){
        /* extract the data from the json object and assign to variables */
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed)

        /* calling the html classes and rendering the data to the app */
        document.querySelector(".city").innerText = " " + name;
        document.querySelector(".weather-icon").src = "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
        document.querySelector(".conditions").innerText = description;
        document.querySelector(".temperature").innerText = temp + " °C";
        document.querySelector(".humidity").innerText = "Humidity :" + humidity + " %";
        document.querySelector(".wind-speed").innerText = "Wind Speed :" + speed + " km/h";

        let temperatureSection = document.querySelector(".temperature");
        temperatureSection.addEventListener('click', () => {
            if(temperatureSection.textContent === "°C"){
                temperatureSection.textContent = "°F";
            }else{
                temperatureSection.textContent = "°C"
            }
        })
    },
    
};



