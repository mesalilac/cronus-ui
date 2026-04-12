import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemCode } from './IconSystemCode';

const meta = {
    title: 'Icon/System/Code',
    component: IconSystemCode,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemCode>;

export default meta;
type Story = StoryObj<typeof IconSystemCode>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
