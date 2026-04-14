import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditSelectMultiple as IconComp } from './IconEditSelectMultiple';

const meta = {
    title: 'Icon/Edit/SelectMultiple',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconSelectMultiple: Story = {
    name: 'SelectMultiple'
    args: {
        size: '6rem',
    },
};
