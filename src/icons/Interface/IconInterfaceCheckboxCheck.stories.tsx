import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceCheckboxCheck as IconComp } from './IconInterfaceCheckboxCheck';

const meta = {
    title: 'Icon/Interface/CheckboxCheck',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCheckboxCheck: Story = {
    name: 'CheckboxCheck',
    args: {
        size: '6rem',
    },
};
