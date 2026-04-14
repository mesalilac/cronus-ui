import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceCheckboxUnchecked as IconComp } from './IconInterfaceCheckboxUnchecked';

const meta = {
    title: 'Icon/Interface/CheckboxUnchecked',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCheckboxUnchecked: Story = {
    name: 'CheckboxUnchecked'
    args: {
        size: '6rem',
    },
};
