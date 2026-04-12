import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemWindowCodeBlock as IconComp } from './IconSystemWindowCodeBlock';

const meta = {
    title: 'Icon/System/WindowCodeBlock',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const WindowCodeBlock: Story = {
    args: {
        size: '6rem',
    },
};
