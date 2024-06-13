import { Checkbox, List, ListItem, Text, Button } from '@mantine/core';
import { useEffect, useState } from "react"
import { Task, deleteTask, tasks$, toggleTask } from "../rxjs";
import { MdDeleteForever } from "react-icons/md";

export function TaskList() {
    const [taskList, setTaskList] = useState<Task[]>([])
    
    useEffect(() => {
        const subscription = tasks$.subscribe((updatedTask) => setTaskList([...updatedTask]));

        return () => {
            subscription.unsubscribe();
        };
    }, [])

    return (
        <div>
            <List>
                {taskList.map((task) => {

                    return(
                        <li key={task.id} className='flex items-center gap-6 mb-6'>
                            <Button variant="filled" color="gray" onClick={() => deleteTask(task.id)}>
                                <MdDeleteForever />
                            </Button>
                            <Text className={task.status ? 'line-through' : undefined}>
                                {task.text}
                            </Text>
                            <Checkbox
                                checked = {task.status ? true : false}
                                onChange = {() => toggleTask(task.id)}
                            />
                        </li>
                    )
                })}
            </List>
        </div>
    )
}