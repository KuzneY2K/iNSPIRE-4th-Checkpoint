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
            console.log(error);
        }
    }

    async deleteTodo(todoId) {
        try {
            let filteredTodo = AppState.todoList.filter(todo => todo.id != todoId)
            AppState.todoList = filteredTodo
            this.saveTodo()
        } catch (error) {
            console.log(error);
        }
    }

    saveTodo() {
        saveState('todoList', AppState.todoList)
    }
}

export const todoService = new TodoService()