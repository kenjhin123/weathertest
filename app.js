const $ = document.querySelector.bind(document)
const $$ = document.querySelector.bind(document)

const city = $('.city')
const time = $('.time')
const sky = $('.sky')
const vini = $('.vinisibli')
const wind = $('.wind')
const cloud = $('.cloud')
const number = $('.number')
const coutry = $('.coutry')
const input = $('.input')
const date = new Date()

input.onkeydown = function(e){
    if(e.key == 'Enter' ){
        getInput(input.value)
    }
}

function changeUI(data){
sky.innerHTML = data.weather[0].main
 city.innerHTML = data.name
 time.innerHTML = date.toLocaleString()
 number.innerHTML = Math.floor(data.main.temp)
 wind.innerHTML = data.wind.speed + '(m/s)'
 cloud.innerHTML = data.clouds.all + '(%)'
 vini.innerHTML = data.visibility + 'm'
 coutry.innerHTML = data.sys.country
}
function getInput(input){
    let app = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=9571a688b7ac6cee066227cdf49728f6&units=metric`
    fetch(app)
    .then(response => response.json())
    .then(data => changeUI(data))

}
