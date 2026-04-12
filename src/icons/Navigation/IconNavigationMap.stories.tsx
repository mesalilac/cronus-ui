import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationMap } from './IconNavigationMap';

const meta = {
    title: 'Icon/Navigation/Map',
    component: IconNavigationMap,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconNavigationMap>;

export default meta;
type Story = StoryObj<typeof IconNavigationMap>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
