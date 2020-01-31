let api_key = '3c084bd74c2f77f02d6d6c30c2018bf0'
let base_url = 'https://api.openweathermap.org/data/2.5/'
let icon_base_url = 'http://openweathermap.org/img/wn/'
let icon_suffix = '@2x.png'
let verb = 'weather?'
let units = 'metric'


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

function get_weather(data) {
    console.log(data);
    console.log(data.main.temp);
    document.getElementById("temp").innerHTML = data.main.temp + " &deg;C";
    document.getElementById("pressure").innerHTML = data.main.pressure + " kPa";
    document.getElementById("wpict").src = icon_base_url + data.weather[0].icon + icon_suffix;
}