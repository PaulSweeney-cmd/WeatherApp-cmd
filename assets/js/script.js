/* defining a variable complete with your API key assigned as a key:value pair,
   key sourced from www.openweather.org */
let weather = {
    "api": "dbc479491b0ccb704e65731224cbf39d",

    /* creating a function with a fetch method to extract information from the url */
    getWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=Lincoln&units=metric&appid=dbc479491b0ccb704e65731224cbf39d"
        ).then((response) => response.json()).then((data) => console.log(data));
    },
};



