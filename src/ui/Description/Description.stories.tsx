import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Description } from './Description';

type StoryComponent = typeof Description;

const meta = {
    title: 'Ui/Description',
    component: Description,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StoryComponent>;

export default meta;

type Story = StoryObj<StoryComponent>;

export const Default: Story = {
    render: () => {
        return <Description>Description Example</Description>;
    },
};
