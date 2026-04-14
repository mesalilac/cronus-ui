import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemData as IconComp } from './IconSystemData';

const meta = {
    title: 'Icon/System/Data',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconData: Story = {
    name: 'Data',
    args: {
        size: '6rem',
    },
};
