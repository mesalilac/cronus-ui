import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceSearchMagnifyingGlass } from './IconInterfaceSearchMagnifyingGlass';

const meta = {
    title: 'Icon/Interface/SearchMagnifyingGlass',
    component: IconInterfaceSearchMagnifyingGlass,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceSearchMagnifyingGlass>;

export default meta;
type Story = StoryObj<typeof IconInterfaceSearchMagnifyingGlass>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
