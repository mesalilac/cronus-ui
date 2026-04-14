import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditRedo as IconComp } from './IconEditRedo';

const meta = {
    title: 'Icon/Edit/Redo',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconRedo: Story = {
    name: 'Redo',
    args: {
        size: '6rem',
    },
};
