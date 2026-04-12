import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditListChecklist } from './IconEditListChecklist';

const meta = {
    title: 'Icon/Edit/ListChecklist',
    component: IconEditListChecklist,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconEditListChecklist>;

export default meta;
type Story = StoryObj<typeof IconEditListChecklist>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
