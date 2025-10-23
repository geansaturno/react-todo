import { useState } from "react";
import type { TodoInputProps } from "./TodoInput.types";
import style from './TodoInput.module.scss'
import { TodoButton } from "../TodoButton/TodoButton";

export function TodoInput({onAdd} : TodoInputProps) {

    const [input, setInput] = useState('')

    function sendInput() {
        onAdd(input)

        setInput('')
    }

    return (
        <div className={style.todo_input}>
            <input className={style.todo_input__input} type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => /enter/i.test(e.code) && sendInput()}/>
            <TodoButton onClick={sendInput}>Adicionar</TodoButton>
        </div>
    )
}