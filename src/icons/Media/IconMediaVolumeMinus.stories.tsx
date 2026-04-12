import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaVolumeMinus } from './IconMediaVolumeMinus';

const meta = {
    title: 'Icon/Media/VolumeMinus',
    component: IconMediaVolumeMinus,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMediaVolumeMinus>;

export default meta;
type Story = StoryObj<typeof IconMediaVolumeMinus>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
