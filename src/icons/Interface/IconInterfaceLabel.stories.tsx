import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLabel } from './IconInterfaceLabel';

const meta = {
    title: 'Icon/Interface/Label',
    component: IconInterfaceLabel,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceLabel>;

export default meta;
type Story = StoryObj<typeof IconInterfaceLabel>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
