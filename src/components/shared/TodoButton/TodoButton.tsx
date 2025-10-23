import type { TodoButtonProps } from "./TodoButton.types";
import style from './TodoButton.module.scss'

export function TodoButton({onClick, children}: TodoButtonProps) {
    return (
        <button className={style.todo_btn} onClick={onClick}>{children}</button>
    )
}