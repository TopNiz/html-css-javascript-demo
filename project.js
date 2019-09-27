var api_key = '3c084bd74c2f77f02d6d6c30c2018bf0'
var base_url = 'https://api.openweathermap.org/data/2.5/'
var icon_base_url = 'http://openweathermap.org/img/wn/'
var icon_suffix = '@2x.png'
var verb = 'weather?'
var units = 'metric'


function search () {
  //var city = document.getElementById('city').value
  var city = document.getElementById('city').value
  var url = base_url + verb +
                'q=' + city +
                '&units=' + units +
                '&appid=' + api_key
  send_request(url, get_weather)
}

function send_request(url, cb) {
    fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(data => cb(data))
}

function get_weather (data) {
    console.log(data)
    document.getElementById("temperature").innerHTML = data.main.temp + "&deg;C"
    document.getElementById("pressure").innerHTML = data.main.pressure
    document.getElementById("humidity").innerHTML = data.main.humidity
    document.getElementById("wind-direction").innerHTML = data.wind.deg
    document.getElementById("wind-speed").innerHTML = data.wind.speed

    var icon_code = data.weather[0].icon
    var icon_url = icon_base_url + icon_code + icon_suffix

    document.getElementById("icon").src = icon_url

    document.getElementsByClassName("container")[0].style.backgroundImage = "url('weather" + icon_code + ".jpg')";
}