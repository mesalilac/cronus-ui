import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditHeading } from './IconEditHeading';

const meta = {
    title: 'Icon/Edit/Heading',
    component: IconEditHeading,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditHeading>;

export default meta;
type Story = StoryObj<typeof IconEditHeading>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
