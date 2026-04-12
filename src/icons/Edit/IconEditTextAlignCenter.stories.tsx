import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditTextAlignCenter as IconComp } from './IconEditTextAlignCenter';

const meta = {
    title: 'Icon/Edit/TextAlignCenter',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const TextAlignCenter: Story = {
    args: {
        size: '6rem',
    },
};
