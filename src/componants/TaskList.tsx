import { Checkbox, List, ListItem, Text, Button } from '@mantine/core';
import { useEffect, useState } from "react"
import { Task, tasks$, toggleTask } from "../rxjs";
import { MdDeleteForever } from "react-icons/md";

export function TaskList() {
    const [taskList, setTaskList] = useState<Task[]>([])
    
    useEffect(() => {
        tasks$.subscribe((updatedTask) => setTaskList([...updatedTask]))
    }, [])

    return (
        <div>
            <List>
                {taskList.map((task) => {

                    return(
                        <ListItem key={task.id}>
                            <Checkbox
                                checked = {task.status ? true : false}
                                onChange = {() => toggleTask(task.id)}
                            />
                            <Text className={task.status ? 'line-through' : undefined}>
                                {task.text}
                            </Text>
                            <Button variant="filled" color="gray">
                                <MdDeleteForever />
                            </Button>
                        </ListItem>
                    )
                })}
            </List>
        </div>
    )
}