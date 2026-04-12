import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconCommunicationPaperPlane as IconComp } from './IconCommunicationPaperPlane';

const meta = {
    title: 'Icon/Communication/PaperPlane',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const PaperPlane: Story = {
    args: {
        size: '6rem',
    },
};
