import type { TodoComponentCommonProps } from "../../../types/commons.types";

export interface TodoInputProps extends TodoComponentCommonProps {
    onAdd:(todo: string) => void
}