import type { Meta, StoryObj } from 'storybook-solidjs-vite';

const meta = {
    title: 'Ui/Overview',
    parameters: {
        layout: 'centered',
    },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
    render: () => null,
};
