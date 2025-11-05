import { useState } from "react";
import type { TodoInputProps } from "./TodoInput.types";
import style from './TodoInput.module.scss'
import { TodoButton } from "../TodoButton/TodoButton";
import clsx from "clsx";

export function TodoInput({onAdd, className} : TodoInputProps) {

    const [input, setInput] = useState('')

    function sendInput() {
        onAdd(input)

        setInput('')
    }

    return (
        <div className={clsx(style.todoInput, className)}>
            <input className={style.todoInput__input} type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => /enter/i.test(e.code) && sendInput()}/>
            <TodoButton onClick={sendInput}>Adicionar</TodoButton>
        </div>
    )
}