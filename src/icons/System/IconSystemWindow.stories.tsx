import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemWindow as IconComp } from './IconSystemWindow';

const meta = {
    title: 'Icon/System/Window',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconWindow: Story = {
    name: 'Window',
    args: {
        size: '6rem',
    },
};
