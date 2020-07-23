//init weather

const weather  = new Weather('miami');

//init UI

const ui = new UI();

// Call getWeatherOnloads when the window loads 
document.addEventListener('DOMContentLoaded', getWeatherOnloads);


//Add event listener on change location button

const save = document.querySelector('#save');

save.addEventListener('click', ()=>{

const cityInput =  document.getElementById('city-input').value;
console.log(cityInput);



// changeLocation call if user changes it
weather.changeLocation(cityInput);

//call getweather again to get the updated results
getWeatherOnloads();

//Modal close use jquery 

$('#locModal').modal('hide');

})



//process the getweather result

function getWeatherOnloads(){
        weather.getWeather().then(data =>{
            ui.showWeatherUI(data.weatherResponse);
        });
    
}

