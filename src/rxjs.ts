import { BehaviorSubject } from "rxjs";
import { uniqueId } from "lodash";

export type Task = {
    id: string,
    text: string,
    status: boolean
}

const tasks: Task[] = []

export const tasks$ = new BehaviorSubject(tasks)

export const addTask = (text: string) => {

    tasks.push({
        id: uniqueId(),
        text: text,
        status: false
    })

    tasks$.next(tasks)
}

export const deleteTask = (id: string) => {
    const taskIndex: number = tasks.findIndex((task) => task.id === id)
    tasks.splice(taskIndex, 1)
    tasks$.next(tasks)
}

export const toggleTask = (id: string) => {
    const task = tasks.find((task) => task.id === id) as Task

    task.status = !task?.status

    tasks$.next(tasks)
}