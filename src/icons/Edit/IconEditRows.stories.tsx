import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditRows as IconComp } from './IconEditRows';

const meta = {
    title: 'Icon/Edit/Rows',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconRows: Story = {
    name: 'Rows'
    args: {
        size: '6rem',
    },
};
