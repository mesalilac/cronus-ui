import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceLineXl } from './IconInterfaceLineXl';

const meta = {
    title: 'Icon/Interface/LineXl',
    component: IconInterfaceLineXl,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceLineXl>;

export default meta;
type Story = StoryObj<typeof IconInterfaceLineXl>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
