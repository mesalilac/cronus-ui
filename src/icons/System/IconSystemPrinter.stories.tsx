import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemPrinter as IconComp } from './IconSystemPrinter';

const meta = {
    title: 'Icon/System/Printer',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconPrinter: Story = {
    name: 'Printer'
    args: {
        size: '6rem',
    },
};
