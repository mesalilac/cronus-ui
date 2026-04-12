import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconEnvironmentSun as IconComp } from './IconEnvironmentSun';

const meta = {
    title: 'Icon/Environment/Sun',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Sun: Story = {
    args: {
        size: '6rem',
    },
};
