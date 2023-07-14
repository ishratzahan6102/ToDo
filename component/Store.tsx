import { makeAutoObservable } from "mobx";

export interface Todo {
    id: number;
    title: string;
    done: boolean
    time: string;
    description: string;
    previousStatus: string
}

const removeTodo = (todos: Todo[], id: number): Todo[] =>
    todos.filter((todo) => todo.id != id)

const addTodo = (todos: Todo[], title: string, time: string, description: string, previousStatus: string): Todo[] => [
    ...todos,
    {
        id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
        title,
        time,
        description,
        previousStatus,
        done: false,
    },
]

// MobX implementation
class Store {
    todos: Todo[] = [];
    title: string = "";
    time: string = "";
    description: string = "";
    previousStatus: string = "";



    constructor() {
        makeAutoObservable(this)
    }

    addTodo() {
        this.todos = addTodo(this.todos, this.title, this.time, this.description, this.previousStatus)
        this.time = "";
        this.title = "";
        this.description = "";
        this.previousStatus = "";
    }

    removeTodo(id: number) {
        this.todos = removeTodo(this.todos, id)
    }

}

const store = new Store()
export default store;

