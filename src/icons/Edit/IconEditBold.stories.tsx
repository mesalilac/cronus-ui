import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditBold as IconComp } from './IconEditBold';

const meta = {
    title: 'Icon/Edit/Bold',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Bold: Story = {
    args: {
        size: '6rem',
    },
};
