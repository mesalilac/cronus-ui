import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconFileCheck as IconComp } from './IconFileCheck';

const meta = {
    title: 'Icon/File/Check',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCheck: Story = {
    name: 'Check',
    args: {
        size: '6rem',
    },
};
