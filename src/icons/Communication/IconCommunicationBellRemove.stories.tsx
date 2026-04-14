import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationBellRemove as IconComp } from './IconCommunicationBellRemove';

const meta = {
    title: 'Icon/Communication/BellRemove',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconBellRemove: Story = {
    name: 'BellRemove',
    args: {
        size: '6rem',
    },
};
