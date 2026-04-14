import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconShapeWavy as IconComp } from './IconShapeWavy';

const meta = {
    title: 'Icon/Shape/Wavy',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconWavy: Story = {
    name: 'Wavy',
    args: {
        size: '6rem',
    },
};
