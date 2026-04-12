import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCaretDownMd } from './IconArrowCaretDownMd';

const meta = {
    title: 'Icon/Arrow/CaretDownMd',
    component: IconArrowCaretDownMd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowCaretDownMd>;

export default meta;
type Story = StoryObj<typeof IconArrowCaretDownMd>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
