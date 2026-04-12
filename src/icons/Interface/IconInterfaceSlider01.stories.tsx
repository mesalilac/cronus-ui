import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceSlider01 } from './IconInterfaceSlider01';

const meta = {
    title: 'Icon/Interface/Slider01',
    component: IconInterfaceSlider01,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceSlider01>;

export default meta;
type Story = StoryObj<typeof IconInterfaceSlider01>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
