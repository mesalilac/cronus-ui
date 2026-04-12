import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemWindowSidebar as IconComp } from './IconSystemWindowSidebar';

const meta = {
    title: 'Icon/System/WindowSidebar',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const WindowSidebar: Story = {
    args: {
        size: '6rem',
    },
};
