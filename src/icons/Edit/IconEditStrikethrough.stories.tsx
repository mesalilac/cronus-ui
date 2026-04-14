import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditStrikethrough as IconComp } from './IconEditStrikethrough';

const meta = {
    title: 'Icon/Edit/Strikethrough',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconStrikethrough: Story = {
    name: 'Strikethrough',
    args: {
        size: '6rem',
    },
};
