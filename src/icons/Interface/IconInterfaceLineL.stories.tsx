import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLineL as IconComp } from './IconInterfaceLineL';

const meta = {
    title: 'Icon/Interface/LineL',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const LineL: Story = {
    args: {
        size: '6rem',
    },
};
