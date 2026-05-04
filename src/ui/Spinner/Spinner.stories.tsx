import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Spinner } from './Spinner';

type StoryComponent = typeof Spinner;

const meta = {
    title: 'Ui/Spinner',
    component: Spinner,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StoryComponent>;

export default meta;
type Story = StoryObj<StoryComponent>;

export const Default: Story = {
    render: () => {
        return <Spinner />;
    },
};
