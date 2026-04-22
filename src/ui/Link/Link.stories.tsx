import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Link } from './Link';

const meta = {
    title: 'Ui/Link',
    component: Link,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
    render: () => {
        return <Link href='https://www.google.com'>Google</Link>;
    },
};

export const External: Story = {
    render: () => {
        return <Link href='https://www.google.com'>Google</Link>;
    },
};

export const ExternalWithoutIcon: Story = {
    render: () => {
        return (
            <Link hideIcon href='https://www.google.com'>
                Google
            </Link>
        );
    },
};

export const Internal: Story = {
    render: () => {
        return <Link href='/users'>Users</Link>;
    },
};

export const Disabled: Story = {
    render: () => {
        return (
            <Link disabled href='https://www.google.com'>
                Google
            </Link>
        );
    },
};
