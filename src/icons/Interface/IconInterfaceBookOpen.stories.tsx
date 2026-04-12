import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceBookOpen as IconComp } from './IconInterfaceBookOpen';

const meta = {
    title: 'Icon/Interface/BookOpen',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const BookOpen: Story = {
    args: {
        size: '6rem',
    },
};
