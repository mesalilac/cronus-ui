import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Slider } from '~/ui/Slider';

import { Progress } from './Progress';

type StoryComponent = typeof Progress;

const meta = {
    title: 'Ui/Progress',
    component: Progress,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StoryComponent>;

export default meta;
type Story = StoryObj<StoryComponent>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = createSignal(0);

        const interval = setInterval(() => {
            if (value() === 100) clearInterval(interval);

            setValue((prev) => prev + 1);
        }, 20);

        return (
            <div class='size-96'>
                <Progress max={100} value={value()} />
            </div>
        );
    },
};

export const withLabel: Story = {
    render: () => {
        return (
            <div class='size-96'>
                <Progress max={100} value={80}>
                    <Progress.Label>Label</Progress.Label>
                    <Progress.Bar />
                </Progress>
            </div>
        );
    },
};

export const ExternalControl: Story = {
    render: () => {
        const [value, setValue] = createSignal(0);

        return (
            <div class='flex size-96 flex-col gap-4'>
                <Progress max={100} value={value()}>
                    <Progress.Label>Label</Progress.Label>
                    <Progress.Bar />
                </Progress>
                <Slider max={100} onInput={setValue} value={value()}>
                    <Slider.Input />
                </Slider>
            </div>
        );
    },
};
