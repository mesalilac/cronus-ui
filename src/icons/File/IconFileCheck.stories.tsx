import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileCheck } from './IconFileCheck';

const meta = {
    title: 'Icon/File/Check',
    component: IconFileCheck,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconFileCheck>;

export default meta;
type Story = StoryObj<typeof IconFileCheck>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
