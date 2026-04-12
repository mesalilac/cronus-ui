import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditColumns as IconComp } from './IconEditColumns';

const meta = {
    title: 'Icon/Edit/Columns',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Columns: Story = {
    args: {
        size: '6rem',
    },
};
