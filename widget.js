let api_key = ''
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
  
}
