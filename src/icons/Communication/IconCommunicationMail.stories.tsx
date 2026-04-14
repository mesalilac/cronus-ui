import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationMail as IconComp } from './IconCommunicationMail';

const meta = {
    title: 'Icon/Communication/Mail',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconMail: Story = {
    name: 'Mail'
    args: {
        size: '6rem',
    },
};
