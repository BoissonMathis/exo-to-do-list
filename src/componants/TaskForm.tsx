import { Button, Group, TextInput } from "@mantine/core";
import { useForm } from '@mantine/form';
import { addTask } from "../rxjs";

export function TaskForm() {

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          text: '',
          termsOfService: false,
        },
    });

    return (
        <div className="flex flex-col content-center w-fit mb-16">
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