const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d121565643msh077bf2d210f883ap132640jsna9608e5605ef",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city)=>{

	cityName.innerHTML = city;

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
	// cloud_pct.innerHTML = response.cloud_pct
	feels_like.innerHTML = response.feels_like
	humidity.innerHTML = response.humidity
	max_temp.innerHTML = response.max_temp
	min_temp.innerHTML = response.min_temp
	sunrise.innerHTML = response.sunrise
	sunset.innerHTML = response.sunset
	temp.innerHTML = response.temp
	wind_degrees.innerHTML = response.wind_degrees
	wind_speed.innerHTML = response.wind_speed
  })
  .catch((err) => console.error(err));

}

 const other_city_temp = (city) =>{

	fetch(
		"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,options)
		.then((response) => response.json())
		.then((response) => {
		   
		   document.getElementById(`${city}_td1`).innerHTML = response.temp;
		   document.getElementById(`${city}_td2`).innerHTML = response.max_temp;
		   document.getElementById(`${city}_td3`).innerHTML = response.min_temp;
		   document.getElementById(`${city}_td4`).innerHTML = response.wind_speed;

		})
		.catch((err) => console.error(err));
 }


getWeather("Jabalpur");

other_city_temp('delhi');
other_city_temp('mumbai');
other_city_temp('kolkata');
other_city_temp('bangalore');
other_city_temp('gurgaon');
other_city_temp('lucknow');

submit.addEventListener('click', (e)=>{
	  e.preventDefault();
	  getWeather(city.value);
})


