import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconWarningInfo } from './IconWarningInfo';

const meta = {
    title: 'Icon/Warning/Info',
    component: IconWarningInfo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof IconWarningInfo>;

export default meta;
type Story = StoryObj<typeof IconWarningInfo>;

export const Default: Story = {
    args: {
        size: '6rem',
    },
};
