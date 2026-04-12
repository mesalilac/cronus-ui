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

export const Printer: Story = {
    args: {
        size: '6rem',
    },
};
