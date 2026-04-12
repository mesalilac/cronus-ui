import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceFilterOff as IconComp } from './IconInterfaceFilterOff';

const meta = {
    title: 'Icon/Interface/FilterOff',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const FilterOff: Story = {
    args: {
        size: '6rem',
    },
};
