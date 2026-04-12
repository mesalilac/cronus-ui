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

export const SearchMagnifyingGlass: Story = {
    args: {
        size: '6rem',
    },
};
