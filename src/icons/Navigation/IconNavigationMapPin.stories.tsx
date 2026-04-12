import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationMapPin } from './IconNavigationMapPin';

const meta = {
    title: 'Icon/Navigation/MapPin',
    component: IconNavigationMapPin,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconNavigationMapPin>;

export default meta;
type Story = StoryObj<typeof IconNavigationMapPin>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
