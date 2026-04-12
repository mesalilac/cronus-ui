import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceCheckboxUnchecked } from './IconInterfaceCheckboxUnchecked';

const meta = {
    title: 'Icon/Interface/CheckboxUnchecked',
    component: IconInterfaceCheckboxUnchecked,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceCheckboxUnchecked>;

export default meta;
type Story = StoryObj<typeof IconInterfaceCheckboxUnchecked>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
