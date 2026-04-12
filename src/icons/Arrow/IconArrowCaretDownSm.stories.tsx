import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCaretDownSm } from './IconArrowCaretDownSm';

const meta = {
    title: 'Icon/Arrow/CaretDownSm',
    component: IconArrowCaretDownSm,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconArrowCaretDownSm>;

export default meta;
type Story = StoryObj<typeof IconArrowCaretDownSm>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
