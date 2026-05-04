import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconMenuMoreHorizontal } from '~/icons';
import { Button } from '~/ui/Button/Button';

import { ButtonGroup } from './ButtonGroup';

type StoryComponent = typeof ButtonGroup;

const meta = {
    title: 'Ui/ButtonGroup',
    component: ButtonGroup,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StoryComponent>;

export default meta;
type Story = StoryObj<StoryComponent>;

export const Default: Story = {
    render: () => {
        return (
            <div class='flex flex-col gap-4'>
                <ButtonGroup>
                    <Button variant='outline'>Archive</Button>
                    <Button variant='outline'>Report</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button variant='outline'>Snooze</Button>
                    <Button variant='outline'>
                        <IconMenuMoreHorizontal />
                    </Button>
                </ButtonGroup>
            </div>
        );
    },
};
