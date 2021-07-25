window.addEventListener('load', ()=> {
    /* defining the co-ordinates variables */
    let long;
    let lat;

    /* if users current location exists in the browser get current location */
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(location => {
            long = location.coords.longitude;
            lat = location.coords.latitude;

            /* assigning the API call with your generated API key to the variable, 
            API key sourced from www.OpenWeather.org */
            const apiKey = `https://api.openweathermap.org/data/2.5/weather?${lat}&lon=${long}&appid={dbc479491b0ccb704e65731224cbf39d}`;

            /* getting the location from the URL above by making a call to the api and returning the results */
            fetch(apiKey)
                .then(feedback => {
                    return feedback.json();
                })
                .then(data => {
                    console.log(data);
                });
        });
    }
});





