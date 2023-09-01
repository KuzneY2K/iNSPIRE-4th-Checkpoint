import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js"
import { AuthService } from "../services/AuthService.js"
import { AuthController } from "./AuthController.js"
import { homeService } from "../services/HomeService.js"

export class HomeController {
  constructor() {
    console.log('This is the Home Controller',)
    AppState.on("account", this.drawUi)
  }

  async drawUi() {
    await homeService.drawUi()

  }

}
