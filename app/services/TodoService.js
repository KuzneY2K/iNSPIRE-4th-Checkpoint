import { AppState } from "../AppState.js"
import { TodoController } from "../controllers/TodoController.js"
import { Todo } from "../models/Todo.js"
import { saveState } from "../utils/Store.js"
import { api } from "./AxiosService.js"

class TodoService {
    constructor() {

    }

    async createTodo(formData) {
        try {
            let res = await api.post('api/todos', formData)
            console.log(res)
            let newTodo = new Todo(res.data)
            AppState.todoList.push(newTodo)
            console.log(AppState.todoList)
            AppState.emit('todoList')
            this.saveTodo()
        } catch (error) {
            alert('ERROR')
            console.log(error);
        }
    }

    async deleteTodo(todoId) {
        try {
            let res = api.delete(`api/todos/${todoId}`)
            console.log(res)
            let filteredTodo = AppState.todoList.filter(todo => todo.id != todoId)
            AppState.todoList = filteredTodo
            this.saveTodo()
        } catch (error) {
            alert('ERROR')
            console.log(error);
        }
    }

    async editTodo(todoId) {
        try {
            let foundTodo = AppState.todoList.find(todo => todo.id == todoId)
            let thisCheckbox = document.getElementById(`${todoId}CheckBox`)
            // thisCheckbox.checked = true
            // foundTodo.completed = true
            // console.log(foundTodo)
            if (foundTodo.completed == false) {
                thisCheckbox.checked = true
                foundTodo.completed = true
                this.saveTodo()
                console.log(foundTodo)
            } else if (foundTodo.completed == true) {
                thisCheckbox.checked = false
                foundTodo.completed = false
                this.saveTodo()
                console.log(foundTodo)
            }
            let res = await api.put(`/api/todos/${todoId}`, foundTodo)
            console.log(res)
        } catch (error) {
            alert('ERROR')
            console.log(error)
        }
    }

    saveTodo() {
        saveState('todoList', AppState.todoList)
    }
}

export const todoService = new TodoService()