import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconSystemPrinter } from './IconSystemPrinter';

const meta = {
    title: 'Icon/System/Printer',
    component: IconSystemPrinter,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconSystemPrinter>;

export default meta;
type Story = StoryObj<typeof IconSystemPrinter>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
