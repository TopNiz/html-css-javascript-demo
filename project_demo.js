/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
var api_key = '3c084bd74c2f77f02d6d6c30c2018bf0'
var base_url = 'https://api.openweathermap.org/data/2.5/'
var request = 'weather?'
var units = 'metric'

function search () {
  var city = document.getElementById('city').value
  var url = base_url + request +
                'q=' + city +
                '&units=' + units +
                '&appid=' + api_key
  xhr(url, get_temp)
}

function xhr (url, cb) {
  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      cb(xhttp.responseText)
    }
  }
  xhttp.open('GET', url, true)
  xhttp.send()
}

function get_temp (weather) {

}
