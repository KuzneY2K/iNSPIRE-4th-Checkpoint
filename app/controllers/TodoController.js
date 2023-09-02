import { AppState } from "../AppState.js";
import { todoService } from "../services/TodoService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Todo } from "../models/Todo.js";

export class TodoController {
    constructor() {
        this.drawTodo()
    }

    async createTodo() {
        try {
            window.event.preventDefault()
            const form = window.event.target
            const formData = getFormData(form)
            await todoService.createTodo(formData)
            this.drawTodo()
        } catch (error) {
            console.log(error)
        }
    }

    async deleteTodo(todoId) {
        try {
            if (confirm("Click OK to delete.") == true) {
                await todoService.deleteTodo(todoId)
                this.drawTodo()
            } else {
                alert('Deleted')
            }
        } catch (error) {
            console.log(error);
        }
    }

    drawTodo() {
        let template = ''
        let todoContainer = document.getElementById('todo-container')
        AppState.todoList.forEach(todo => template += todo.TodoTemplate)
        todoContainer.innerHTML = template
    }
}