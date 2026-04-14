import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceCheckboxFill as IconComp } from './IconInterfaceCheckboxFill';

const meta = {
    title: 'Icon/Interface/CheckboxFill',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCheckboxFill: Story = {
    name: 'CheckboxFill'
    args: {
        size: '6rem',
    },
};
