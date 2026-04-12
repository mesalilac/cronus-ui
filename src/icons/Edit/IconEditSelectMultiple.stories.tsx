import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditSelectMultiple } from './IconEditSelectMultiple';

const meta = {
    title: 'Icon/Edit/SelectMultiple',
    component: IconEditSelectMultiple,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditSelectMultiple>;

export default meta;
type Story = StoryObj<typeof IconEditSelectMultiple>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
