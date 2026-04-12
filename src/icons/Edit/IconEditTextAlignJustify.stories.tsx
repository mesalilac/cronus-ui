import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditTextAlignJustify as IconComp } from './IconEditTextAlignJustify';

const meta = {
    title: 'Icon/Edit/TextAlignJustify',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const TextAlignJustify: Story = {
    args: {
        size: '6rem',
    },
};
