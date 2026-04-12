import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditAddRow } from './IconEditAddRow';

const meta = {
    title: 'Icon/Edit/AddRow',
    component: IconEditAddRow,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditAddRow>;

export default meta;
type Story = StoryObj<typeof IconEditAddRow>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
