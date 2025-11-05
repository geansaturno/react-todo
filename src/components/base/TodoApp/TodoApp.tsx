import { PageContainer } from "../../shared/PageContainer/PageContainer";
import { TodoInput } from "../../shared/TodoInput/TodoInput";
import styles from './TodoApp.module.scss';

export function TodoApp() {
    function addNewTodo(todo: string) {
        console.log('todo', todo)
    }

    return (
        <PageContainer>
            <main className={styles.todoApp}>
                <TodoInput onAdd={addNewTodo}/>
            </main>
        </PageContainer>
    )
}