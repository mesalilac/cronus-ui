import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceHandbag } from './IconInterfaceHandbag';

const meta = {
    title: 'Icon/Interface/Handbag',
    component: IconInterfaceHandbag,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceHandbag>;

export default meta;
type Story = StoryObj<typeof IconInterfaceHandbag>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
