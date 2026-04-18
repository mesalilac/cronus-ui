import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { RadioGroup } from './RadioGroup';

const meta = {
    title: 'Ui/RadioGroup',
    component: RadioGroup,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = createSignal('1');

        return (
            <RadioGroup onChange={setValue} value={value()}>
                <RadioGroup.Item value='1'>Option 1</RadioGroup.Item>
                <RadioGroup.Item value='2'>Option 2</RadioGroup.Item>
                <RadioGroup.Item value='3'>Option 3</RadioGroup.Item>
            </RadioGroup>
        );
    },
};

export const DirectionRow: Story = {
    render: () => {
        const [value, setValue] = createSignal('1');

        return (
            <RadioGroup direction='row' onChange={setValue} value={value()}>
                <RadioGroup.Item value='1'>Option 1</RadioGroup.Item>
                <RadioGroup.Item value='2'>Option 2</RadioGroup.Item>
                <RadioGroup.Item value='3'>Option 3</RadioGroup.Item>
            </RadioGroup>
        );
    },
};

export const WithLabel: Story = {
    render: () => {
        const [value, setValue] = createSignal('1');

        return (
            <RadioGroup label='Label' onChange={setValue} value={value()}>
                <RadioGroup.Item value='1'>Option 1</RadioGroup.Item>
                <RadioGroup.Item value='2'>Option 2</RadioGroup.Item>
                <RadioGroup.Item value='3'>Option 3</RadioGroup.Item>
            </RadioGroup>
        );
    },
};

export const WithHelperText: Story = {
    render: () => {
        const [value, setValue] = createSignal('1');

        return (
            <RadioGroup onChange={setValue} value={value()}>
                <RadioGroup.Item value='1'>Option 1</RadioGroup.Item>
                <RadioGroup.Item helper='Option 2' value='2'>
                    Option 2
                </RadioGroup.Item>
                <RadioGroup.Item value='3'>Option 3</RadioGroup.Item>
            </RadioGroup>
        );
    },
};

export const Disabled: Story = {
    render: () => {
        const [value, setValue] = createSignal('1');

        return (
            <RadioGroup disabled onChange={setValue} value={value()}>
                <RadioGroup.Item value='1'>Option 1</RadioGroup.Item>
                <RadioGroup.Item value='2'>Option 2</RadioGroup.Item>
                <RadioGroup.Item value='3'>Option 3</RadioGroup.Item>
            </RadioGroup>
        );
    },
};

export const DisabledOption: Story = {
    render: () => {
        const [value, setValue] = createSignal('1');

        return (
            <RadioGroup onChange={setValue} value={value()}>
                <RadioGroup.Item value='1'>Option 1</RadioGroup.Item>
                <RadioGroup.Item disabled value='2'>
                    Option 2
                </RadioGroup.Item>
                <RadioGroup.Item value='3'>Option 3</RadioGroup.Item>
            </RadioGroup>
        );
    },
};
