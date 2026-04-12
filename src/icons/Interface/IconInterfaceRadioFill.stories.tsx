import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceRadioFill } from './IconInterfaceRadioFill';

const meta = {
    title: 'Icon/Interface/RadioFill',
    component: IconInterfaceRadioFill,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceRadioFill>;

export default meta;
type Story = StoryObj<typeof IconInterfaceRadioFill>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
