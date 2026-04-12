import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditCloseCircle as IconComp } from './IconEditCloseCircle';

const meta = {
    title: 'Icon/Edit/CloseCircle',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const CloseCircle: Story = {
    args: {
        size: '6rem',
    },
};
