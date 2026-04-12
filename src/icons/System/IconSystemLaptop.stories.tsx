import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemLaptop as IconComp } from './IconSystemLaptop';

const meta = {
    title: 'Icon/System/Laptop',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Laptop: Story = {
    args: {
        size: '6rem',
    },
};
