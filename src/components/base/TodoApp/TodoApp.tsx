import { useState } from "react";
import { PageContainer } from "../../shared/PageContainer/PageContainer";
import { TodoInput } from "../../shared/TodoInput/TodoInput";
import styles from './TodoApp.module.scss';

export function TodoApp() {
    const [todos, setTodos] = useState<string[]>([])
    
    const todoList = todos.map((todo) => <li key={todo}>{todo}</li>)

    function addNewTodo(todo: string) {
        setTodos([...todos, todo])
    }

    return (
        <PageContainer>
            <main className={styles.todoApp}>
                <TodoInput className={styles.todoApp__input} onAdd={addNewTodo}/>

                <ul>
                    {todoList}
                </ul>
            </main>
        </PageContainer>
    )
}