import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemCode as IconComp } from './IconSystemCode';

const meta = {
    title: 'Icon/System/Code',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCode: Story = {
    name: 'Code',
    args: {
        size: '6rem',
    },
};
