import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMediaStop as IconComp } from './IconMediaStop';

const meta = {
    title: 'Icon/Media/Stop',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Stop: Story = {
    args: {
        size: '6rem',
    },
};
