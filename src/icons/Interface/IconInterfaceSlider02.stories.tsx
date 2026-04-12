import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceSlider02 as IconComp } from './IconInterfaceSlider02';

const meta = {
    title: 'Icon/Interface/Slider02',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Slider02: Story = {
    args: {
        size: '6rem',
    },
};
