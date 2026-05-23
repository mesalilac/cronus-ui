import { createSignal, Show } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Input } from '~/ui/Input';

import { Field } from './Field';

type StoryComponent = typeof Field;

const meta = {
    title: 'Ui/Field',
    component: Field,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StoryComponent>;

export default meta;

type Story = StoryObj<StoryComponent>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = createSignal<string>('');

        return (
            <Field class='size-96'>
                <Field.Label>Simple Field</Field.Label>
                <Input onInput={setValue} value={value()} />
            </Field>
        );
    },
};

export const WithDescription: Story = {
    render: () => {
        const [value, setValue] = createSignal<string>('');

        return (
            <Field class='size-96'>
                <Field.Label>Simple Field</Field.Label>
                <Input onInput={setValue} value={value()} />
                <Field.Description>Description</Field.Description>
            </Field>
        );
    },
};

export const Warning: Story = {
    render: () => {
        const [value, setValue] = createSignal<string>('');

        return (
            <Field class='size-96'>
                <Field.Label>Simple Field</Field.Label>
                <Input onInput={setValue} value={value()} />
                <Show when={value().trim().length === 0}>
                    <Field.Warning>This is a warning</Field.Warning>
                </Show>
            </Field>
        );
    },
};

export const Errors: Story = {
    render: () => {
        const [value, setValue] = createSignal<string>('');

        return (
            <Field class='size-96'>
                <Field.Label>Simple Field</Field.Label>
                <Input onInput={setValue} value={value()} />
                <Show when={value().trim().length === 0}>
                    <Field.Error>This is an error</Field.Error>
                </Show>
            </Field>
        );
    },
};
