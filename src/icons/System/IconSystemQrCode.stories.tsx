import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemQrCode as IconComp } from './IconSystemQrCode';

const meta = {
    title: 'Icon/System/QrCode',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const QrCode: Story = {
    args: {
        size: '6rem',
    },
};
