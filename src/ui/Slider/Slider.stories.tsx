import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Slider } from './Slider';

const meta = {
    title: 'Ui/Slider',
    component: Slider,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = createSignal(30);

        return <Slider onInput={setValue} value={value()} />;
    },
};

export const WithLabel: Story = {
    render: () => {
        const [value, setValue] = createSignal(20);

        return (
            <Slider
                label={
                    <div class='flex justify-between'>
                        <span>Volume</span>
                        <span>{value()}%</span>
                    </div>
                }
                onInput={setValue}
                value={value()}
            />
        );
    },
};

export const WithMarkers: Story = {
    render: () => {
        const [value, setValue] = createSignal(20);

        return (
            <>
                <Slider
                    label={
                        <div class='flex justify-between'>
                            <span>Volume</span>
                            <span>{value()}%</span>
                        </div>
                    }
                    list='markers'
                    onInput={setValue}
                    value={value()}
                />
                <datalist id='markers'>
                    <option value='0' />
                    <option value='25' />
                    <option value='50' />
                    <option value='75' />
                    <option value='100' />
                </datalist>
            </>
        );
    },
};

export const Disabled: Story = {
    render: () => {
        const [value, setValue] = createSignal(30);

        return <Slider disabled onInput={setValue} value={value()} />;
    },
};
