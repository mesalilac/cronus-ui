import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationCarAuto as IconComp } from './IconNavigationCarAuto';

const meta = {
    title: 'Icon/Navigation/CarAuto',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const CarAuto: Story = {
    args: {
        size: '6rem',
    },
};
