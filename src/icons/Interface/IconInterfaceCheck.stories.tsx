import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceCheck } from './IconInterfaceCheck';

const meta = {
    title: 'Icon/Interface/Check',
    component: IconInterfaceCheck,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceCheck>;

export default meta;
type Story = StoryObj<typeof IconInterfaceCheck>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
