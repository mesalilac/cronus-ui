import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconInterfaceSlider03 as IconComp } from './IconInterfaceSlider03';

const meta = {
    title: 'Icon/Interface/Slider03',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Slider03: Story = {
    args: {
        size: '6rem',
    },
};
