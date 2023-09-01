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
  }

  async drawUi() {
    await homeService.drawUi()

  }

  drawTime() {
    homeService.drawTime()
    setInterval(function () {
      let clock = document.getElementById('clock')
      clock.style.visibility = "visible"
      clock.classList.add('animate__animated')
      clock.classList.add('animate__flash')
      clock.innerHTML = AppState.time
    }, 1000)
  }

}
