import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceFilter as IconComp } from './IconInterfaceFilter';

const meta = {
    title: 'Icon/Interface/Filter',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconFilter: Story = {
    name: 'Filter'
    args: {
        size: '6rem',
    },
};
