import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationMap as IconComp } from './IconNavigationMap';

const meta = {
    title: 'Icon/Navigation/Map',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Map: Story = {
    args: {
        size: '6rem',
    },
};
