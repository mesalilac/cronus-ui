import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEditTextAlignLeft as IconComp } from './IconEditTextAlignLeft';

const meta = {
    title: 'Icon/Edit/TextAlignLeft',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconTextAlignLeft: Story = {
    name: 'TextAlignLeft'
    args: {
        size: '6rem',
    },
};
