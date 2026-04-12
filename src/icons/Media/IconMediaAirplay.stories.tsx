import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaAirplay } from './IconMediaAirplay';

const meta = {
    title: 'Icon/Media/Airplay',
    component: IconMediaAirplay,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconMediaAirplay>;

export default meta;
type Story = StoryObj<typeof IconMediaAirplay>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
