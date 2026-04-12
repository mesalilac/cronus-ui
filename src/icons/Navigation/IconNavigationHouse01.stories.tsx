import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconNavigationHouse01 as IconComp } from './IconNavigationHouse01';

const meta = {
    title: 'Icon/Navigation/House01',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const House01: Story = {
    args: {
        size: '6rem',
    },
};
