import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceRadioFill as IconComp } from './IconInterfaceRadioFill';

const meta = {
    title: 'Icon/Interface/RadioFill',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconRadioFill: Story = {
    name: 'RadioFill'
    args: {
        size: '6rem',
    },
};
