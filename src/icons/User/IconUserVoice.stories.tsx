import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUserVoice } from './IconUserVoice';

const meta = {
    title: 'Icon/User/Voice',
    component: IconUserVoice,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconUserVoice>;

export default meta;
type Story = StoryObj<typeof IconUserVoice>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
