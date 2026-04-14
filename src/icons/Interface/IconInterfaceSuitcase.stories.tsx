import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceSuitcase as IconComp } from './IconInterfaceSuitcase';

const meta = {
    title: 'Icon/Interface/Suitcase',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconSuitcase: Story = {
    name: 'Suitcase',
    args: {
        size: '6rem',
    },
};
