import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceRadioUnchecked as IconComp } from './IconInterfaceRadioUnchecked';

const meta = {
    title: 'Icon/Interface/RadioUnchecked',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const RadioUnchecked: Story = {
    args: {
        size: '6rem',
    },
};
