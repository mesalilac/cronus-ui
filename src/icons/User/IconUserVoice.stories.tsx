import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUserVoice as IconComp } from './IconUserVoice';

const meta = {
    title: 'Icon/User/Voice',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconVoice: Story = {
    name: 'Voice',
    args: {
        size: '6rem',
    },
};
