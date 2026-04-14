import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemTablet as IconComp } from './IconSystemTablet';

const meta = {
    title: 'Icon/System/Tablet',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconTablet: Story = {
    name: 'Tablet'
    args: {
        size: '6rem',
    },
};
