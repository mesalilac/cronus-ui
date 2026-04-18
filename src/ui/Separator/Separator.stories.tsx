import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Separator } from './Separator';

const meta = {
    title: 'Ui/Separator',
    component: Separator,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {
    render: () => (
        <div class='w-32'>
            <h1>Title</h1>
            <Separator />
        </div>
    ),
};

export const Vertical: Story = {
    render: () => (
        <div class='flex flex-row gap-2'>
            <h1>A</h1>
            <Separator />
            <h1>B</h1>
        </div>
    ),
};
