import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditListChecklist as IconComp } from './IconEditListChecklist';

const meta = {
    title: 'Icon/Edit/ListChecklist',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconListChecklist: Story = {
    name: 'ListChecklist',
    args: {
        size: '6rem',
    },
};
