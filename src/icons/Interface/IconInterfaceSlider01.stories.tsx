import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceSlider01 as IconComp } from './IconInterfaceSlider01';

const meta = {
    title: 'Icon/Interface/Slider01',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Slider01: Story = {
    args: {
        size: '6rem',
    },
};
