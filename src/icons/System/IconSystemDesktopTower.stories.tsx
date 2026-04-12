import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemDesktopTower } from './IconSystemDesktopTower';

const meta = {
    title: 'Icon/System/DesktopTower',
    component: IconSystemDesktopTower,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemDesktopTower>;

export default meta;
type Story = StoryObj<typeof IconSystemDesktopTower>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
