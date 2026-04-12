import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationMailOpen as IconComp } from './IconCommunicationMailOpen';

const meta = {
    title: 'Icon/Communication/MailOpen',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const MailOpen: Story = {
    args: {
        size: '6rem',
    },
};
