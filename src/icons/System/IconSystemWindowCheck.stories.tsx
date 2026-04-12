import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemWindowCheck as IconComp } from './IconSystemWindowCheck';

const meta = {
    title: 'Icon/System/WindowCheck',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const WindowCheck: Story = {
    args: {
        size: '6rem',
    },
};
