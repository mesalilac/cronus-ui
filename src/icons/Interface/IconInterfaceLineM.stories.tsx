import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLineM as IconComp } from './IconInterfaceLineM';

const meta = {
    title: 'Icon/Interface/LineM',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const LineM: Story = {
    args: {
        size: '6rem',
    },
};
