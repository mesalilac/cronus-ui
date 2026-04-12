import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceSlider02 } from './IconInterfaceSlider02';

const meta = {
    title: 'Icon/Interface/Slider02',
    component: IconInterfaceSlider02,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconInterfaceSlider02>;

export default meta;
type Story = StoryObj<typeof IconInterfaceSlider02>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
