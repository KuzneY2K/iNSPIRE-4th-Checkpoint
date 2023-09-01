import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js"
import { AuthService } from "../services/AuthService.js"
import { AuthController } from "./AuthController.js"
import { homeService } from "../services/HomeService.js"

export class HomeController {
  constructor() {
    console.log('This is the Home Controller',)
    AppState.on("account", this.drawUi)
    AppState.on("account", this.drawTime)
    AppState.on('account', this.drawWeather)
  }

  async drawUi() {
    try {
      await homeService.drawUi()
    } catch (error) {
      console.log(error)
      alert('ERROR', error)
    }

  }

  drawTime() {
    setInterval(() => {
      homeService.drawTime()
      let clock = document.getElementById('clock')
      clock.innerHTML = `${AppState.time}<br>${AppState.day}<br>${AppState.fullDate}`
      clock.style.visibility = "visible"
      clock.classList.add('animate__animated')
      clock.classList.add('animate__fadeInBottomLeft')
    }, 500)
  }

  toggleDeg() {
    if (AppState.faren == true) {
      AppState.cel = true
      AppState.faren = false
    } else if (AppState.cel == true) {
      AppState.faren = true
      AppState.cel = false
    }
  }

  async drawWeather() {
    try {
      setInterval(() => {
        homeService.drawWeather()
        let weather = document.getElementById('weather')
        if (AppState.faren == true) {
          weather.innerHTML = `${AppState.tempFaren}° F<br>${AppState.city}<br>${AppState.conditions}`
        } else if (AppState.cel == true) {
          weather.innerHTML = `${AppState.tempCel}° C<br>${AppState.city}<br>${AppState.conditions}`
        }
        weather.style.visibility = "visible"
        weather.classList.add('animate__animated')
        weather.classList.add('animate__fadeInBottomRight')
      }, 500)
    } catch (error) {
      console.log(error)
      alert('ERROR', error)
    }
  }

}
