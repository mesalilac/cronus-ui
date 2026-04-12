import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditAddPlus } from './IconEditAddPlus';

const meta = {
    title: 'Icon/Edit/AddPlus',
    component: IconEditAddPlus,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditAddPlus>;

export default meta;
type Story = StoryObj<typeof IconEditAddPlus>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
