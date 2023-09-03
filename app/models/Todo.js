export class Todo {
    constructor(data) {
        this.id = data.id
        this.description = data.description
        this.completed = data.completed
    }

    get TodoTemplate() {
        return /*html*/ `

                          <li class="list-group-item border-0 d-flex align-items-center ps-0">
                <input class="form-check-input me-3 checkbox" type="checkbox" value="" aria-label="..." id="${this.id}CheckBox" onclick="app.TodoController.editTodo('${this.id}')">
                <span class="badge grad-custom-3 fs-3 border border-2 border-dark">${this.description}</span>
                <a><i class="mdi mdi-trash-can text-danger fs-3 btn m-auto" onclick="app.TodoController.deleteTodo('${this.id}')"></i></a>
              </li>

        `
    }
}