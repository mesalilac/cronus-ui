import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLabel as IconComp } from './IconInterfaceLabel';

const meta = {
    title: 'Icon/Interface/Label',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Label: Story = {
    args: {
        size: '6rem',
    },
};
