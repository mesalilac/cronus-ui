import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUserCardId as IconComp } from './IconUserCardId';

const meta = {
    title: 'Icon/User/CardId',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCardId: Story = {
    name: 'CardId',
    args: {
        size: '6rem',
    },
};
