import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceOption } from './IconInterfaceOption';

const meta = {
    title: 'Icon/Interface/Option',
    component: IconInterfaceOption,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceOption>;

export default meta;
type Story = StoryObj<typeof IconInterfaceOption>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
