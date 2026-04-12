import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditText } from './IconEditText';

const meta = {
    title: 'Icon/Edit/Text',
    component: IconEditText,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditText>;

export default meta;
type Story = StoryObj<typeof IconEditText>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
