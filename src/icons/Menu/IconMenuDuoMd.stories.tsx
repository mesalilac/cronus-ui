import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuDuoMd as IconComp } from './IconMenuDuoMd';

const meta = {
    title: 'Icon/Menu/DuoMd',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconDuoMd: Story = {
    name: 'DuoMd',
    args: {
        size: '6rem',
    },
};
