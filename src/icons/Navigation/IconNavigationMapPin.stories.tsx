import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationMapPin as IconComp } from './IconNavigationMapPin';

const meta = {
    title: 'Icon/Navigation/MapPin',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconMapPin: Story = {
    name: 'MapPin'
    args: {
        size: '6rem',
    },
};
