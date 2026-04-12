import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditRemoveMinusCircle as IconComp } from './IconEditRemoveMinusCircle';

const meta = {
    title: 'Icon/Edit/RemoveMinusCircle',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const RemoveMinusCircle: Story = {
    args: {
        size: '6rem',
    },
};
