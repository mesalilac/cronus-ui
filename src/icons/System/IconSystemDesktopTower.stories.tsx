import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemDesktopTower as IconComp } from './IconSystemDesktopTower';

const meta = {
    title: 'Icon/System/DesktopTower',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const DesktopTower: Story = {
    args: {
        size: '6rem',
    },
};
