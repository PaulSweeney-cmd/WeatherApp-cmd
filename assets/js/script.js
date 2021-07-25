window.addEventListener('load', ()=> {
    /* defining the co-ordinates variables */
    let long;
    let lat;

    /* if users current location exists in the browser get current location */
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(location => {
            long = location.coords.longitude;
            lat = location.coords.latitude;

            /* assigning the API call with your generated API key to the variable, 
            API key sourced from www.OpenWeather.org */
            const apiKey = `https://api.openweathermap.org/data/2.5/weather?lat=${lat},&lon=${long}&appid={1b1739c497edc04ee44df7be05100696}`;
        });
    
    /* if the users curent location does not exists, produce the following message */
    }else {
        h2.textContent = "Unable to find current location, please check your spelling and try again"
    }
});




