import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditUnderline as IconComp } from './IconEditUnderline';

const meta = {
    title: 'Icon/Edit/Underline',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconUnderline: Story = {
    name: 'Underline'
    args: {
        size: '6rem',
    },
};
