import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceBook as IconComp } from './IconInterfaceBook';

const meta = {
    title: 'Icon/Interface/Book',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconBook: Story = {
    name: 'Book'
    args: {
        size: '6rem',
    },
};
