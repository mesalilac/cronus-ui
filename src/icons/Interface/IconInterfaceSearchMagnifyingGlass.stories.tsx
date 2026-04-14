import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceSearchMagnifyingGlass as IconComp } from './IconInterfaceSearchMagnifyingGlass';

const meta = {
    title: 'Icon/Interface/SearchMagnifyingGlass',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconSearchMagnifyingGlass: Story = {
    name: 'SearchMagnifyingGlass'
    args: {
        size: '6rem',
    },
};
