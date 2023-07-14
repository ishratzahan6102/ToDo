import { action, makeObservable, observable } from "mobx";

class Todo {
    id: number;
    title: string;
    time: string;
    description: string;
    previousStatus: string

    constructor(id: number, title: string, time: string, description: string, previousStatus: string) {

        this.id = id,
        this.title = title,
            this.time = time,
            this.description = description,
            this.previousStatus = previousStatus;

        makeObservable(this, {
            id: observable,
            title: observable,
            time: observable,
            description: observable,
            updateStatus: action,
            previousStatus: true
            
        })
    }

    updateStatus(status: string) {
        this.previousStatus = status
    }

    todos: Todo[] = []

    addTodo(todo: Todo){
        this.todos.push(todo)
    }

}

export default Todo;