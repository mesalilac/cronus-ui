import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCaretDownSm as IconComp } from './IconArrowCaretDownSm';

const meta = {
    title: 'Icon/Arrow/CaretDownSm',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const CaretDownSm: Story = {
    args: {
        size: '6rem',
    },
};
