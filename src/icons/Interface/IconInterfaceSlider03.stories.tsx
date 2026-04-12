import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceSlider03 } from './IconInterfaceSlider03';

const meta = {
    title: 'Icon/Interface/Slider03',
    component: IconInterfaceSlider03,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceSlider03>;

export default meta;
type Story = StoryObj<typeof IconInterfaceSlider03>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
