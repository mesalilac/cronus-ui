import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemQrCode } from './IconSystemQrCode';

const meta = {
    title: 'Icon/System/QrCode',
    component: IconSystemQrCode,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemQrCode>;

export default meta;
type Story = StoryObj<typeof IconSystemQrCode>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
