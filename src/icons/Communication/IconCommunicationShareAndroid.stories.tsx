import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationShareAndroid as IconComp } from './IconCommunicationShareAndroid';

const meta = {
    title: 'Icon/Communication/ShareAndroid',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconShareAndroid: Story = {
    name: 'ShareAndroid',
    args: {
        size: '6rem',
    },
};
