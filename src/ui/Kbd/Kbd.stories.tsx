import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { IconArrowSubLeftDown } from '~/icons';
import { Button } from '~/ui/Button';

import { Kbd, KbdGroup } from './Kbd';

type StoryComponent = typeof Kbd;

const meta = {
    title: 'Ui/Kbd',
    component: Kbd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StoryComponent>;

export default meta;

type Story = StoryObj<StoryComponent>;

export const Default: Story = {
    render: () => {
        return <Kbd>k</Kbd>;
    },
};

export const Group: Story = {
    render: () => {
        return (
            <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <span>+</span>
                <Kbd>S</Kbd>
            </KbdGroup>
        );
    },
};

export const InButton: Story = {
    render: () => {
        return (
            <Button>
                Submit
                <KbdGroup>
                    <Kbd>
                        <IconArrowSubLeftDown />
                    </Kbd>
                </KbdGroup>
            </Button>
        );
    },
};

export const InText: Story = {
    render: () => {
        return (
            <p>
                Use{' '}
                <KbdGroup>
                    <Kbd>Ctrl</Kbd>
                    <span>+</span>
                    <Kbd>S</Kbd>
                </KbdGroup>{' '}
                to save buffer
            </p>
        );
    },
};
