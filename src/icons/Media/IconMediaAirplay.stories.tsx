import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaAirplay as IconComp } from './IconMediaAirplay';

const meta = {
    title: 'Icon/Media/Airplay',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconAirplay: Story = {
    name: 'Airplay'
    args: {
        size: '6rem',
    },
};
