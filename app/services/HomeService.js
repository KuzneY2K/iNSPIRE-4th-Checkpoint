import { AppState } from "../AppState.js"
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
        console.log(resImg.data.url)
        console.log(resQuote.data)
        imgContainer.style.backgroundImage = `url(${resImg.data.url})`
        imgContainer.style.backgroundSize = 'cover'
        imgContainer.style.backgroundRepeat = 'no-repeat'
        imgContainer.classList.add('animate__animated')
        imgContainer.classList.add('animate__fadeIn')
        welcomeMessage.remove()
        nameContainer.innerHTML = `Welcome Back <br>${AppState.account.name}`
        nameContainer.classList.add('animate__animated')
        nameContainer.classList.add('animate__fadeInDownBig')
        quoteContainer.innerHTML = `"${resQuote.data.content}" <span class="quote-author"><br>-${resQuote.data.author}</span>`
        quoteContainer.classList.add('animate__animated')
        quoteContainer.classList.add('animate__zoomInDown')
        console.log('account', AppState.account)
    }

    drawTime() {
        let date = new Date()
        let min = String(date.getMinutes()).padStart(2, '0')
        let hour = date.getHours()
        if (hour >= 13) {
            hour = hour - 12 + `:${min} PM`
        } else {
            hour = hour + `:${min} AM`
        }
        AppState.time = hour
        console.log(AppState.time)
    }
}

export const homeService = new HomeService()