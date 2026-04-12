import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceBook } from './IconInterfaceBook';

const meta = {
    title: 'Icon/Interface/Book',
    component: IconInterfaceBook,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceBook>;

export default meta;
type Story = StoryObj<typeof IconInterfaceBook>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
