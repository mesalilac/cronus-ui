import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemWindowSidebar } from './IconSystemWindowSidebar';

const meta = {
    title: 'Icon/System/WindowSidebar',
    component: IconSystemWindowSidebar,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemWindowSidebar>;

export default meta;
type Story = StoryObj<typeof IconSystemWindowSidebar>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
