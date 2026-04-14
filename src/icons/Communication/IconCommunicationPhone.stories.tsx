import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationPhone as IconComp } from './IconCommunicationPhone';

const meta = {
    title: 'Icon/Communication/Phone',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconPhone: Story = {
    name: 'Phone'
    args: {
        size: '6rem',
    },
};
