import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUserCheck as IconComp } from './IconUserCheck';

const meta = {
    title: 'Icon/User/Check',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCheck: Story = {
    name: 'Check'
    args: {
        size: '6rem',
    },
};
