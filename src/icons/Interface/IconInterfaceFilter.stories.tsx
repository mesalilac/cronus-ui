import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceFilter } from './IconInterfaceFilter';

const meta = {
    title: 'Icon/Interface/Filter',
    component: IconInterfaceFilter,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceFilter>;

export default meta;
type Story = StoryObj<typeof IconInterfaceFilter>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
