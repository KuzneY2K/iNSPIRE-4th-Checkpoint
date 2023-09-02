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
            alert('ERROR')
            console.log(error);
        }
    }

    async editTodo(todoId) {
        try {
            todoService.editTodo(todoId)
            this.checkIncompleted()
        } catch (error) {
            alert('ERROR')
            console.log(error);
        }
    }

    drawTodo() {
        let template = ''
        let todoContainer = document.getElementById('todo-container')
        AppState.todoList.forEach(todo => template += todo.TodoTemplate)
        todoContainer.innerHTML = template
        AppState.todoList.forEach(todo => {
            let thisCheckbox = document.getElementById(`${todo.id}CheckBox`)
            if (todo.completed == true) {
                thisCheckbox.checked = true
                console.log(todo)
            } else if (todo.completed == false) {
                thisCheckbox.checked = false
                console.log(todo)
            }
        })
        this.checkIncompleted()
    }

    checkIncompleted() {
        let count = document.getElementById('incomplete-count')
        let filteredTodo = AppState.todoList.filter(todo => todo.completed != true)
        count.innerHTML = filteredTodo.length
    }
}