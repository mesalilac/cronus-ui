import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Slider } from '~/ui/Slider';

import { Progressbar } from './Progressbar';

type StoryComponent = typeof Progressbar;

const meta = {
    title: 'Ui/Progressbar',
    component: Progressbar,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StoryComponent>;

export default meta;
type Story = StoryObj<StoryComponent>;

export const Default: Story = {
    render: () => {
        return (
            <div class='size-96'>
                <Progressbar max={100} value={80}>
                    <Progressbar.Label>Label</Progressbar.Label>
                    <Progressbar.Bar />
                </Progressbar>
            </div>
        );
    },
};

export const ExternalControl: Story = {
    render: () => {
        const [value, setValue] = createSignal(0);

        return (
            <div class='flex size-96 flex-col gap-4'>
                <Progressbar max={100} value={value()}>
                    <Progressbar.Label>Label</Progressbar.Label>
                    <Progressbar.Bar />
                </Progressbar>
                <Slider max={100} onInput={setValue} value={value()}>
                    <Slider.Input />
                </Slider>
            </div>
        );
    },
};
