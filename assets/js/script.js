window.addEventListener('load', ()=> {
    let lon;
    let lat;

    /* if users current location exists in the browser */
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
                console.log(position);
            });
    
    /* if the users curent location does not exists, produce the following message */
    }else {
        h2.textContent = "Unable to find current location, please check your spelling and try again"
    }
});




// const api = `api.openweathermap.org/data/2.5/weather?lat=${latitude},&lon=${longitude}&appid={1b1739c497edc04ee44df7be05100696}`;