import { Match, Switch } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { CopyButton } from './CopyButton';

type StoryComponent = typeof CopyButton;

const meta = {
    title: 'Ui/CopyButton',
    component: CopyButton,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StoryComponent>;

export default meta;

type Story = StoryObj<StoryComponent>;

export const Default: Story = {
    render: () => {
        return <CopyButton value='copy button value' />;
    },
};

export const CustomDelay: Story = {
    render: () => {
        return <CopyButton delayMs={4000} value='copy button value' />;
    },
};

export const CustomStyles: Story = {
    render: () => {
        return (
            <CopyButton
                appearance={(state) => {
                    switch (state()) {
                        case 'normal':
                            return 'primary';
                        case 'copied':
                            return 'primary';
                        case 'failed':
                            return 'danger';
                    }
                }}
                value='copy button value'
                variant={(state) => {
                    switch (state()) {
                        case 'normal':
                            return 'ghost';
                        case 'copied':
                            return 'soft';
                        case 'failed':
                            return 'outline';
                    }
                }}
            />
        );
    },
};

export const CustomLabel: Story = {
    render: () => {
        return (
            <CopyButton value='copy button value'>
                {(state) => {
                    return (
                        <Switch>
                            <Match when={state() === 'normal'}>Copyme</Match>
                            <Match when={state() === 'copied'}>Copied</Match>
                            <Match when={state() === 'failed'}>
                                Copy Failed
                            </Match>
                        </Switch>
                    );
                }}
            </CopyButton>
        );
    },
};
