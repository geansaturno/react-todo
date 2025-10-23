import { TodoInput } from "../../shared/TodoInput/TodoInput";

export function TodoApp() {
    function addNewTodo(todo: string) {
        console.log('todo', todo)
    }

    return (
        <main>
            <TodoInput onAdd={addNewTodo}/>
        </main>
    )
}