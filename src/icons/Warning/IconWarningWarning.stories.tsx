import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningWarning as IconComp } from './IconWarningWarning';

const meta = {
    title: 'Icon/Warning/Warning',
    component: IconComp,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconComp>;

export default meta;
type Story = StoryObj<typeof IconComp>;

export const Warning: Story = {
    args: {
        size: '6rem',
    },
};
