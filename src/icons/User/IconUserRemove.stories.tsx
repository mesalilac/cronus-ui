import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconUserRemove as IconComp } from './IconUserRemove';

const meta = {
    title: 'Icon/User/Remove',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconRemove: Story = {
    name: 'Remove',
    args: {
        size: '6rem',
    },
};
