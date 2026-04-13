import type { Meta, StoryObj } from 'storybook-solidjs-vite';

const meta = {
    title: 'Icon/Overview',
    parameters: {
        layout: 'centered',
    },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
    render: () => (
        <h1>
            Icons{' '}
            <a
                class='text-blue-500 underline underline-offset-2'
                href='https://coolicons.cool/'
                rel='noopener'
                target='_blank'
            >
                source
            </a>
        </h1>
    ),
};
