import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemKeyboard as IconComp } from './IconSystemKeyboard';

const meta = {
    title: 'Icon/System/Keyboard',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconKeyboard: Story = {
    name: 'Keyboard'
    args: {
        size: '6rem',
    },
};
