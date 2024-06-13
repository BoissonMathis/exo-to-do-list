import { Button, Group, TextInput } from "@mantine/core";
import { useForm } from '@mantine/form';
import { useEffect, useState } from "react"
import { Task, addTask, tasks$ } from "../rxjs";

export function TaskForm() {
    const [taskList, setTaskList] = useState<Task[]>([])
    
    useEffect(() => {
        tasks$.subscribe((updatedTask) => setTaskList([...updatedTask]))
    }, [])

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          text: '',
          termsOfService: false,
        },
    });

    return (
        <div className="w-fit">
            <form onSubmit={form.onSubmit((value) => {addTask(value.text)})}>
                <TextInput
                    label="Add task"
                    placeholder="New task text ..."
                    key={form.key('new-task')}
                    {...form.getInputProps('text')}
                />

                <Group justify="flex-end" mt="md">
                    <Button type="submit">Add task</Button>
                </Group>
            </form>
        </div>
    )
}