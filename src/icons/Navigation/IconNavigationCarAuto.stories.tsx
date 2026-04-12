import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationCarAuto } from './IconNavigationCarAuto';

const meta = {
    title: 'Icon/Navigation/CarAuto',
    component: IconNavigationCarAuto,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconNavigationCarAuto>;

export default meta;
type Story = StoryObj<typeof IconNavigationCarAuto>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
