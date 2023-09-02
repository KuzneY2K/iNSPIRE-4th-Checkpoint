import { AppState } from "../AppState.js"
import { generateId } from "../utils/GenerateId.js"

export class Todo {
    constructor(data) {
        this.id = generateId()
        this.description = data.description
        this.completed = ''
    }

    get TodoTemplate() {
        return /*html*/ `
        
            <li><input class="form-check-input checkbox" type="checkbox" id="myCheckBox" name="completed" onchange="app.TodoController.editTodo('${this.id}')"><span class="badge grad-custom-2 fs-4">${this.description}</span><a><i class="mdi mdi-trash-can text-danger fs-3 btn" onclick="app.TodoController.deleteTodo('${this.id}')"></i></a></li>

        `
    }
}