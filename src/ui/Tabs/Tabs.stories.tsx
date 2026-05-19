import type { ParentComponent } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { cn } from '~/utils';

import { createTabs } from './Tabs';

const Tabs = createTabs<'overview' | 'analytics' | 'reports' | 'settings'>();

type StoryComponent = typeof Tabs.Root;

const meta = {
    title: 'Ui/Tabs',
    component: Tabs.Root,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StoryComponent>;

export default meta;

type Story = StoryObj<StoryComponent>;

const Wrapper: ParentComponent<{ class?: string }> = (props) => {
    return (
        <div
            class={cn('size-156 rounded-default bg-surface-1 p-2', props.class)}
        >
            {props.children}
        </div>
    );
};

export const Default: Story = {
    render: () => {
        return (
            <Wrapper>
                <Tabs.Root defaultValue='overview'>
                    <Tabs.List>
                        <Tabs.Tab value='overview' />
                        <Tabs.Tab value='analytics' />
                        <Tabs.Tab value='reports' />
                        <Tabs.Tab value='settings' />
                    </Tabs.List>
                    <Tabs.Panel value='overview'>Overview</Tabs.Panel>
                    <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>
                    <Tabs.Panel value='reports'>Reports</Tabs.Panel>
                    <Tabs.Panel value='settings'>Settings</Tabs.Panel>
                </Tabs.Root>
            </Wrapper>
        );
    },
};

export const Size: Story = {
    render: () => {
        return (
            <Wrapper>
                <Tabs.Root defaultValue='overview' size='sm'>
                    <Tabs.List>
                        <Tabs.Tab value='overview' />
                        <Tabs.Tab value='analytics' />
                        <Tabs.Tab value='reports' />
                        <Tabs.Tab value='settings' />
                    </Tabs.List>
                    <Tabs.Panel value='overview'>Overview</Tabs.Panel>
                    <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>
                    <Tabs.Panel value='reports'>Reports</Tabs.Panel>
                    <Tabs.Panel value='settings'>Settings</Tabs.Panel>
                </Tabs.Root>
            </Wrapper>
        );
    },
};

export const Horizontal: Story = {
    render: () => {
        return (
            <div class='flex flex-wrap place-content-center gap-1'>
                <Wrapper>
                    <Tabs.Root
                        defaultValue='overview'
                        orientation='horizontal'
                        variant='underline'
                    >
                        <Tabs.List>
                            <Tabs.Tab value='overview' />
                            <Tabs.Tab value='analytics' />
                            <Tabs.Tab value='reports' />
                            <Tabs.Tab value='settings' />
                        </Tabs.List>
                        <Tabs.Panel value='overview'>Overview</Tabs.Panel>
                        <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>
                        <Tabs.Panel value='reports'>Reports</Tabs.Panel>
                        <Tabs.Panel value='settings'>Settings</Tabs.Panel>
                    </Tabs.Root>
                </Wrapper>
                <Wrapper>
                    <Tabs.Root
                        defaultValue='overview'
                        orientation='horizontal'
                        variant='soft'
                    >
                        <Tabs.List>
                            <Tabs.Tab value='overview' />
                            <Tabs.Tab value='analytics' />
                            <Tabs.Tab value='reports' />
                            <Tabs.Tab value='settings' />
                        </Tabs.List>
                        <Tabs.Panel value='overview'>Overview</Tabs.Panel>
                        <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>
                        <Tabs.Panel value='reports'>Reports</Tabs.Panel>
                        <Tabs.Panel value='settings'>Settings</Tabs.Panel>
                    </Tabs.Root>
                </Wrapper>
                <Wrapper>
                    <Tabs.Root
                        defaultValue='overview'
                        orientation='horizontal'
                        variant='subtle'
                    >
                        <Tabs.List>
                            <Tabs.Tab value='overview' />
                            <Tabs.Tab value='analytics' />
                            <Tabs.Tab value='reports' />
                            <Tabs.Tab value='settings' />
                        </Tabs.List>
                        <Tabs.Panel value='overview'>Overview</Tabs.Panel>
                        <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>
                        <Tabs.Panel value='reports'>Reports</Tabs.Panel>
                        <Tabs.Panel value='settings'>Settings</Tabs.Panel>
                    </Tabs.Root>
                </Wrapper>
            </div>
        );
    },
};

export const Vertical: Story = {
    render: () => {
        return (
            <div class='flex flex-wrap place-content-center gap-1'>
                <Wrapper>
                    <Tabs.Root
                        defaultValue='overview'
                        orientation='vertical'
                        variant='underline'
                    >
                        <Tabs.List>
                            <Tabs.Tab value='overview' />
                            <Tabs.Tab value='analytics' />
                            <Tabs.Tab value='reports' />
                            <Tabs.Tab value='settings' />
                        </Tabs.List>
                        <Tabs.Panel value='overview'>Overview</Tabs.Panel>
                        <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>
                        <Tabs.Panel value='reports'>Reports</Tabs.Panel>
                        <Tabs.Panel value='settings'>Settings</Tabs.Panel>
                    </Tabs.Root>
                </Wrapper>
                <Wrapper>
                    <Tabs.Root
                        defaultValue='overview'
                        orientation='vertical'
                        variant='soft'
                    >
                        <Tabs.List>
                            <Tabs.Tab value='overview' />
                            <Tabs.Tab value='analytics' />
                            <Tabs.Tab value='reports' />
                            <Tabs.Tab value='settings' />
                        </Tabs.List>
                        <Tabs.Panel value='overview'>Overview</Tabs.Panel>
                        <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>
                        <Tabs.Panel value='reports'>Reports</Tabs.Panel>
                        <Tabs.Panel value='settings'>Settings</Tabs.Panel>
                    </Tabs.Root>
                </Wrapper>
                <Wrapper>
                    <Tabs.Root
                        defaultValue='overview'
                        orientation='vertical'
                        variant='subtle'
                    >
                        <Tabs.List>
                            <Tabs.Tab value='overview' />
                            <Tabs.Tab value='analytics' />
                            <Tabs.Tab value='reports' />
                            <Tabs.Tab value='settings' />
                        </Tabs.List>
                        <Tabs.Panel value='overview'>Overview</Tabs.Panel>
                        <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>
                        <Tabs.Panel value='reports'>Reports</Tabs.Panel>
                        <Tabs.Panel value='settings'>Settings</Tabs.Panel>
                    </Tabs.Root>
                </Wrapper>
            </div>
        );
    },
};

export const DisabledTabs: Story = {
    render: () => {
        return (
            <div class='flex flex-wrap place-content-center gap-1'>
                <Wrapper>
                    <Tabs.Root
                        defaultValue='overview'
                        orientation='horizontal'
                        variant='underline'
                    >
                        <Tabs.List>
                            <Tabs.Tab disabled value='overview' />
                            <Tabs.Tab value='analytics' />
                            <Tabs.Tab disabled value='reports' />
                            <Tabs.Tab value='settings' />
                        </Tabs.List>
                        <Tabs.Panel value='overview'>Overview</Tabs.Panel>
                        <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>
                        <Tabs.Panel value='reports'>Reports</Tabs.Panel>
                        <Tabs.Panel value='settings'>Settings</Tabs.Panel>
                    </Tabs.Root>
                </Wrapper>
                <Wrapper>
                    <Tabs.Root
                        defaultValue='overview'
                        orientation='horizontal'
                        variant='soft'
                    >
                        <Tabs.List>
                            <Tabs.Tab disabled value='overview' />
                            <Tabs.Tab value='analytics' />
                            <Tabs.Tab disabled value='reports' />
                            <Tabs.Tab value='settings' />
                        </Tabs.List>
                        <Tabs.Panel value='overview'>Overview</Tabs.Panel>
                        <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>
                        <Tabs.Panel value='reports'>Reports</Tabs.Panel>
                        <Tabs.Panel value='settings'>Settings</Tabs.Panel>
                    </Tabs.Root>
                </Wrapper>
                <Wrapper>
                    <Tabs.Root
                        defaultValue='overview'
                        orientation='horizontal'
                        variant='subtle'
                    >
                        <Tabs.List>
                            <Tabs.Tab disabled value='overview' />
                            <Tabs.Tab value='analytics' />
                            <Tabs.Tab disabled value='reports' />
                            <Tabs.Tab value='settings' />
                        </Tabs.List>
                        <Tabs.Panel value='overview'>Overview</Tabs.Panel>
                        <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>
                        <Tabs.Panel value='reports'>Reports</Tabs.Panel>
                        <Tabs.Panel value='settings'>Settings</Tabs.Panel>
                    </Tabs.Root>
                </Wrapper>
            </div>
        );
    },
};

export const Disabled: Story = {
    render: () => {
        return (
            <div class='flex flex-wrap place-content-center gap-1'>
                <Wrapper>
                    <Tabs.Root
                        defaultValue='overview'
                        disabled
                        orientation='horizontal'
                        variant='underline'
                    >
                        <Tabs.List>
                            <Tabs.Tab value='overview' />
                            <Tabs.Tab value='analytics' />
                            <Tabs.Tab value='reports' />
                            <Tabs.Tab value='settings' />
                        </Tabs.List>
                        <Tabs.Panel value='overview'>Overview</Tabs.Panel>
                        <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>
                        <Tabs.Panel value='reports'>Reports</Tabs.Panel>
                        <Tabs.Panel value='settings'>Settings</Tabs.Panel>
                    </Tabs.Root>
                </Wrapper>
                <Wrapper>
                    <Tabs.Root
                        defaultValue='overview'
                        disabled
                        orientation='horizontal'
                        variant='soft'
                    >
                        <Tabs.List>
                            <Tabs.Tab value='overview' />
                            <Tabs.Tab value='analytics' />
                            <Tabs.Tab value='reports' />
                            <Tabs.Tab value='settings' />
                        </Tabs.List>
                        <Tabs.Panel value='overview'>Overview</Tabs.Panel>
                        <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>
                        <Tabs.Panel value='reports'>Reports</Tabs.Panel>
                        <Tabs.Panel value='settings'>Settings</Tabs.Panel>
                    </Tabs.Root>
                </Wrapper>
                <Wrapper>
                    <Tabs.Root
                        defaultValue='overview'
                        disabled
                        orientation='horizontal'
                        variant='subtle'
                    >
                        <Tabs.List>
                            <Tabs.Tab value='overview' />
                            <Tabs.Tab value='analytics' />
                            <Tabs.Tab value='reports' />
                            <Tabs.Tab value='settings' />
                        </Tabs.List>
                        <Tabs.Panel value='overview'>Overview</Tabs.Panel>
                        <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>
                        <Tabs.Panel value='reports'>Reports</Tabs.Panel>
                        <Tabs.Panel value='settings'>Settings</Tabs.Panel>
                    </Tabs.Root>
                </Wrapper>
            </div>
        );
    },
};
