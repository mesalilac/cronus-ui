import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Helper } from './Helper';

type Component = typeof Helper;

const meta = {
    title: 'Helper',
    component: Helper,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<Component>;

export default meta;
type Story = StoryObj<Component>;

export const Default: Story = {
    args: {
        text: 'Helper Text',
    },
};
