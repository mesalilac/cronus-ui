import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceRadioUnchecked } from './IconInterfaceRadioUnchecked';

const meta = {
    title: 'Icon/Interface/RadioUnchecked',
    component: IconInterfaceRadioUnchecked,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceRadioUnchecked>;

export default meta;
type Story = StoryObj<typeof IconInterfaceRadioUnchecked>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
