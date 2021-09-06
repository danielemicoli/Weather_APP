document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#searchCity').addEventListener('click', getCity);

    function getCity(){
        city = document.getElementById('city').value;
        console.log(city);
        let meteoCity = 'https://api.openweathermap.org/data/2.5/weather?q='+city+ '&appid=746c244e1e6c001b6a8197b506b12c22';
        fetch(meteoCity)
        .then(response => response.json())
        .then(data => {

         let obj = data;
         console.log(obj);
    
        //  document.queryselector(".widget").style.color = "blue";

         document.getElementById('cityName').innerHTML = obj.name + ', ' + obj.sys.country;
         document.getElementById('temperature').innerHTML = Math.floor(obj.main.temp -273.15) + ' ' + '°C';
        //  document.getElementById('description').innerHTML = obj.weather[2].description;

         document.getElementById('icon').src = 'http://openweathermap.org/img/wn/'+obj.weather[0].icon+'@2x.png';
         document.getElementById('min').innerHTML = 'Min:  ' + Math.floor(obj.main.temp_min -273.15) + ' '+ '°C';
         document.getElementById('max').innerHTML = 'Max:  ' + Math.floor(obj.main.temp_max -273.15) + ' '+ '°C';
         document.getElementById("widget").style.backgroundColor = "bisque";
         document.getElementById("current-weather-items").style.opacity = 0.8;
  
         
        //  document.getElementById('current-weather-items').src = 'pro.openweathermap.org/data/2.5/forecast/hourly?q='+ city +'&appid=746c244e1e6c001b6a8197b506b12c22';
        //  document.getElementById('time').innerHTML = obj.timezone;
         document.getElementById('current-weather-items').innerHTML = 
         'Humidity:'+'  '+obj.main.humidity+' %'+'<br>Wind Speed:'+'  '+obj.wind.speed+' '+'Km/h'+'<br>Pressure:  '+obj.main.pressure+ ' hPa'
        //  +' '+'<br>Sunrise: '+obj.sys.sunrise+' '+'<br>Sunrise: '+obj.sys.sunset
        
        //  navigator.geolocation.getCurrentPosition( (data) => console.log(data) )
       
        //  var timestamp=new Date().getTime();
        //  console.log(timestamp)

        // getFiveDays()
    }



    )}


    // document.querySelector('#searchCity').addEventListener('click', getFiveDays);

    // function getFiveDays(){
    //     city = document.getElementById('city').value;
    //     console.log(city);
    //     // fiveDays = document.getElementById('forecast').value;
    //     // console.log(fiveDays);
    //     let meteoForecast = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=746c244e1e6c001b6a8197b506b12c22';
    //     fetch(meteoForecast)
    //     .then(response => response.json())
    //     .then(data => {

    //      let objFor = data;
    //      console.log(objFor);


    // document.querySelector('video').playbackRate = 0.8;




// const dateZone = document.getElementById('date')
//     const timeZone = document.getElementById('time');
//     const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday'];


//     setInterval(() => {
//         const time = new Date();
//         const month = time.getMonth();
//         const date = time.getDate();
//         const day = time.getDay();
//         const hour = time.getHours();
//         const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
//         const minutes = time.getMinutes();
//         const ampm = hours >=12 ? 'PM' : 'AM'

//         timeZone.innerHTML = hoursIn12HrFormat + ':' +minutes+ ' '+ `<span id="am-pm">${ampm}</span>`
//         dateZone.innerHTML = days[day] + ', '+date

//     }, 1000);


// document.addEventListener('DOMContentLoaded', function(){

document.querySelector('#searchCity').addEventListener('click', getForecast)

function getForecast(){
    city = document.getElementById('city').value;
    console.log(city);
    let forecastCity = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=746c244e1e6c001b6a8197b506b12c22';
    fetch(forecastCity)
    .then(response => response.json())
    .then(dataFor => {

     let objFor = dataFor;
   

    //  let iconCode = objFor.list[10].weather[0].icon
    //  console.log(iconCode)
     console.log(objFor)
    //  console.log(iconCode)

    //  console.log(objFor.list[3].dt_txt);
    //  console.log(objFor.list[17].main.temp)
        
    //  document.getElementById('dayone').innerHTML = objFor.list[9].dt_txt + Math.floor(objFor.list[9].main.temp -273.15)  + ' '+ '°C' + ' ' + objFor.list[9].weather[0].icon + ' '+objFor.list[25].weather[0].icon + ' ' + objFor.list[33].dt_txt;
    //  document.getElementById('icon-dayone').innerHTML = objFor.list[0].weather[1].icon;
    document.getElementById('date-dayone').innerHTML = objFor.list[8].dt_txt
     document.getElementById('icon-dayone').src = 'http://openweathermap.org/img/wn/'+objFor.list[8].weather[0].icon+'@2x.png';
     document.getElementById('temp-one').innerHTML = Math.floor(objFor.list[8].main.temp -273.15) + ' '+ '°C' ;

     document.getElementById('icon-daytwo').src = 'http://openweathermap.org/img/wn/'+objFor.list[17].weather[0].icon+'@2x.png';
     document.getElementById('temp-two').innerHTML = Math.floor(objFor.list[17].main.temp -273.15) + ' '+ '°C' ;

     document.getElementById('icon-daythree').src = 'http://openweathermap.org/img/wn/'+objFor.list[25].weather[0].icon+'@2x.png';
     document.getElementById('temp-three').innerHTML = Math.floor(objFor.list[25].main.temp -273.15) + ' '+ '°C' ;

     document.getElementById('icon-dayfour').src = 'http://openweathermap.org/img/wn/'+objFor.list[33].weather[0].icon+'@2x.png';
     document.getElementById('temp-four').innerHTML = Math.floor(objFor.list[33].main.temp -273.15) + ' '+ '°C' ;


    //  console.log(objFor.list[8].dt)


    //  document.getElementById('temp-one').innerHTML = objFor.list[1].main.temp
    //  document.getElementById('icon-dayone').innerHTML = objFor.list[2].weather.icon;
    //  document.getElementById('icon-dayone').src = 'http://openweathermap.org/img/wn/'+objFor.list.weather.icon+'@2x.png';

   
    //  document.getElementById('daytwo').innerHTML = 'Max: ' + Math.floor(objFor.main.temp_max -273.15) + ' '+ '°C';
}
    )}})
 