import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowCaretDownMd as IconComp } from './IconArrowCaretDownMd';

const meta = {
    title: 'Icon/Arrow/CaretDownMd',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const IconCaretDownMd: Story = {
    name: 'CaretDownMd'
    args: {
        size: '6rem',
    },
};
