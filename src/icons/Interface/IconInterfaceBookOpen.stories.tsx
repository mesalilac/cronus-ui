import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceBookOpen } from './IconInterfaceBookOpen';

const meta = {
    title: 'Icon/Interface/BookOpen',
    component: IconInterfaceBookOpen,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceBookOpen>;

export default meta;
type Story = StoryObj<typeof IconInterfaceBookOpen>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
