import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditMention as IconComp } from './IconEditMention';

const meta = {
    title: 'Icon/Edit/Mention',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconMention: Story = {
    name: 'Mention',
    args: {
        size: '6rem',
    },
};
