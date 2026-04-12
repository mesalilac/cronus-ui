import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemData } from './IconSystemData';

const meta = {
    title: 'Icon/System/Data',
    component: IconSystemData,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemData>;

export default meta;
type Story = StoryObj<typeof IconSystemData>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
