import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceSuitcase } from './IconInterfaceSuitcase';

const meta = {
    title: 'Icon/Interface/Suitcase',
    component: IconInterfaceSuitcase,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceSuitcase>;

export default meta;
type Story = StoryObj<typeof IconInterfaceSuitcase>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
