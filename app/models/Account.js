export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    // TODO add additional properties if needed
  }

  get AccTemplate() {
    return /*html*/ `          <form onsubmit="app.HomeController.editName()">
          <div class="d-flex flex-row justify-content-end">
              <input type="text" class="form-control w-25" id="accName" placeholder="edit-name">
              <button class="btn btn-danger btn-edit-name">EDIT NAME</button>
              </div>
          </form>`
  }
}