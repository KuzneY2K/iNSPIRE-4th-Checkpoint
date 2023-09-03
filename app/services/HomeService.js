import { AppState } from "../AppState.js"
import { saveState } from "../utils/Store.js";
import { api } from "./AxiosService.js"

class HomeService {
    constructor() {
        console.log('This is the Home Service.');
    }

    async drawUi() {
        let resImg = await api.get('api/images')
        let resQuote = await api.get('api/quotes')
        let imgContainer = document.getElementById('main-container')
        let nameContainer = document.getElementById('account-name')
        let welcomeMessage = document.getElementById('welcome-message')
        let quoteContainer = document.getElementById('quote-container')
        let offCanvasTitle = document.getElementById('offCanvasLabel')
        // let offCanvasToggle = document.getElementById('offcanvas')
        imgContainer.style.backgroundImage = `url(${resImg.data.url})`
        imgContainer.style.backgroundSize = 'cover'
        imgContainer.style.backgroundRepeat = 'no-repeat'
        imgContainer.classList.add('animate__animated')
        imgContainer.classList.add('animate__fadeIn')
        welcomeMessage.remove()
        // nameContainer.innerHTML = `Welcome Back <br>${AppState.account.name}`
        let date = new Date()
        let tfHour = date.getHours()
        if (tfHour <= 11) {
            nameContainer.innerHTML = `Good Morning <br>${AppState.account.name}`
        } else if (tfHour <= 16) {
            nameContainer.innerHTML = `Good Afternoon <br>${AppState.account.name}`
        } else if (tfHour <= 23) {
            nameContainer.innerHTML = `Good Evening <br>${AppState.account.name}`
        }
        nameContainer.classList.add('animate__animated')
        nameContainer.classList.add('animate__fadeInDownBig')
        quoteContainer.innerHTML = `"${resQuote.data.content}" <span class="quote-author"><br>-${resQuote.data.author}</span>`
        quoteContainer.classList.add('animate__animated')
        quoteContainer.classList.add('animate__zoomInDown')
        console.log('account', AppState.account)
        offCanvasTitle.innerHTML = `${AppState.account.name}'s TODO List`
    }

    drawTime() {
        let date = new Date()
        let weekDay = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']
        let today = date.getDay()
        let min = String(date.getMinutes()).padStart(2, '0')
        let hour = date.getHours()
        let tfHour = date.getHours()
        let todayDate = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        let fullDate = `${month}/${todayDate}/${year}`
        AppState.fullDate = fullDate
        if (hour >= 13) {
            hour = hour - 12 + `:${min} PM`
        } else {
            hour = hour + `:${min} AM`
        }
        AppState.time = hour
        AppState.tfTime = tfHour
        AppState.day = weekDay[today]
        console.log(AppState.time)
    }

    async drawWeather() {
        let resWeather = await api.get('api/weather')
        AppState.city = resWeather.data.name.toUpperCase()
        // console.log(resWeather.data.weather)
        AppState.tempFaren = Math.floor(((resWeather.data.main.temp - 273) * 1.8) + 32)
        AppState.tempCel = Math.floor(resWeather.data.main.temp - 273.15)
        AppState.conditions = resWeather.data.weather[0].main.toUpperCase()
    }

    toggleDeg() {
        if (localStorage.getItem('faren') === 'true') {
            localStorage.setItem('cel', 'true')
            localStorage.setItem('faren', 'false')
        } else if (localStorage.getItem('cel') === 'true') {
            localStorage.setItem('faren', 'true')
            localStorage.setItem('cel', 'false')
        }
    }
}

export const homeService = new HomeService()