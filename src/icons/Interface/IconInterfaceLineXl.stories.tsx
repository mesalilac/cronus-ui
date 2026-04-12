import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLineXl as IconComp } from './IconInterfaceLineXl';

const meta = {
    title: 'Icon/Interface/LineXl',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const LineXl: Story = {
    args: {
        size: '6rem',
    },
};
