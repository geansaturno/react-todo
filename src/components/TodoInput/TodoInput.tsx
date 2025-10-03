import { useState } from "react";
import type { TodoInputProps } from "./TodoInput.types";

export function TodoInput({onAdd} : TodoInputProps) {

    const [input, setInput] = useState('')

    function sendInput() {
        onAdd(input)

        setInput('')
    }

    return (
        <div>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.code === 'Enter' && sendInput()}/>
        </div>
    )
}