import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Skeleton } from './Skeleton';

type StoryComponent = typeof Skeleton;

const meta = {
    title: 'Ui/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StoryComponent>;

export default meta;
type Story = StoryObj<StoryComponent>;

export const Default: Story = {
    render: () => {
        return (
            <div class='flex size-96 items-center gap-4'>
                <Skeleton class='h-12 w-12 rounded-full' />
                <div class='space-y-2'>
                    <Skeleton class='h-4 w-62.5' />
                    <Skeleton class='h-4 w-50' />
                </div>
            </div>
        );
    },
};
