import { PageContainer } from "../../shared/PageContainer/PageContainer";
import { TodoInput } from "../../shared/TodoInput/TodoInput";

export function TodoApp() {
    function addNewTodo(todo: string) {
        console.log('todo', todo)
    }

    return (
        <PageContainer>
            <main>
                <TodoInput onAdd={addNewTodo}/>
            </main>
        </PageContainer>
    )
}