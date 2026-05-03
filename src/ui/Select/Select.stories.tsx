import { createMemo, createSignal, For } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Badge } from '~/ui/Badge';
import { capitalize } from '~/utils';

import { Select } from './Select';

const meta = {
    title: 'Ui/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

const OptionsList = [
    'option-1',
    'option-2',
    'option-3',
    'option-4',
    'option-5',
    'option-6',
    'option-7',
    'option-8',
    'option-9',
    'option-10',
    'option-11',
    'option-12',
    'option-13',
    'option-14',
    'option-15',
    'option-16',
    'option-17',
    'option-18',
    'option-19',
    'option-20',
] as const;
const displayOption = (option: string) =>
    capitalize(option.replaceAll('-', ' '));

export const Single: Story = {
    render: () => {
        const [value, setValue] = createSignal('option-1');

        return (
            <Select onChange={setValue} value={value()}>
                <Select.Trigger>{displayOption(value())}</Select.Trigger>
                <Select.Content>
                    <For each={OptionsList}>
                        {(option) => (
                            <Select.Option value={option}>
                                {displayOption(option)}
                            </Select.Option>
                        )}
                    </For>
                </Select.Content>
            </Select>
        );
    },
};

export const OptionGroup: Story = {
    render: () => {
        const [value, setValue] = createSignal('option-1');

        return (
            <Select onChange={setValue} value={value()}>
                <Select.Trigger>{displayOption(value())}</Select.Trigger>
                <Select.Content>
                    <For each={OptionsList}>
                        {(option) => (
                            <Select.Option value={option}>
                                {displayOption(option)}
                            </Select.Option>
                        )}
                    </For>
                    <Select.OptionGroup label='Group 1'>
                        <For
                            each={[
                                'g-1-option-1',
                                'g-1-option-2',
                                'g-1-option-3',
                            ]}
                        >
                            {(option) => (
                                <Select.Option value={option}>
                                    {displayOption(option)}
                                </Select.Option>
                            )}
                        </For>
                    </Select.OptionGroup>
                    <Select.OptionGroup label='Group 2'>
                        <For
                            each={[
                                'g-2-option-1',
                                'g-2-option-2',
                                'g-2-option-3',
                            ]}
                        >
                            {(option) => (
                                <Select.Option value={option}>
                                    {displayOption(option)}
                                </Select.Option>
                            )}
                        </For>
                    </Select.OptionGroup>
                    <Select.OptionGroup label='Group 3'>
                        <For
                            each={[
                                'g-3-option-1',
                                'g-3-option-2',
                                'g-3-option-3',
                            ]}
                        >
                            {(option) => (
                                <Select.Option value={option}>
                                    {displayOption(option)}
                                </Select.Option>
                            )}
                        </For>
                    </Select.OptionGroup>
                    <Select.OptionGroup label='Group 4'>
                        <For
                            each={[
                                'g-4-option-1',
                                'g-4-option-2',
                                'g-4-option-3',
                            ]}
                        >
                            {(option) => (
                                <Select.Option value={option}>
                                    {displayOption(option)}
                                </Select.Option>
                            )}
                        </For>
                    </Select.OptionGroup>
                </Select.Content>
            </Select>
        );
    },
};

export const NestedOptionGroup: Story = {
    render: () => {
        const [value, setValue] = createSignal('option-1');

        return (
            <Select onChange={setValue} value={value()}>
                <Select.Trigger>{displayOption(value())}</Select.Trigger>
                <Select.Content>
                    <For each={OptionsList}>
                        {(option) => (
                            <Select.Option value={option}>
                                {displayOption(option)}
                            </Select.Option>
                        )}
                    </For>
                    <Select.OptionGroup label='Group 1'>
                        <For
                            each={[
                                'g-1-option-1',
                                'g-1-option-2',
                                'g-1-option-3',
                            ]}
                        >
                            {(option) => (
                                <Select.Option value={option}>
                                    {displayOption(option)}
                                </Select.Option>
                            )}
                        </For>
                        <Select.OptionGroup label='Group 2'>
                            <For
                                each={[
                                    'g-2-option-1',
                                    'g-2-option-2',
                                    'g-2-option-3',
                                ]}
                            >
                                {(option) => (
                                    <Select.Option value={option}>
                                        {displayOption(option)}
                                    </Select.Option>
                                )}
                            </For>
                        </Select.OptionGroup>
                    </Select.OptionGroup>
                    <Select.OptionGroup label='Group 3'>
                        <For
                            each={[
                                'g-3-option-1',
                                'g-3-option-2',
                                'g-3-option-3',
                            ]}
                        >
                            {(option) => (
                                <Select.Option value={option}>
                                    {displayOption(option)}
                                </Select.Option>
                            )}
                        </For>
                    </Select.OptionGroup>
                    <Select.OptionGroup label='Group 4'>
                        <For
                            each={[
                                'g-4-option-1',
                                'g-4-option-2',
                                'g-4-option-3',
                            ]}
                        >
                            {(option) => (
                                <Select.Option value={option}>
                                    {displayOption(option)}
                                </Select.Option>
                            )}
                        </For>
                    </Select.OptionGroup>
                </Select.Content>
            </Select>
        );
    },
};

export const Multiple: Story = {
    render: () => {
        const [value, setValue] = createSignal<string[]>([
            'option-1',
            'option-2',
        ]);

        return (
            <Select
                autoClose={false}
                onChange={(v) => {
                    if (value().includes(v)) {
                        setValue((prev) => prev.filter((i) => i !== v));
                        return;
                    }

                    setValue((prev) => [...prev, v]);
                }}
            >
                <Select.Trigger>
                    Select Option <Badge>{value().length}</Badge>
                </Select.Trigger>
                <Select.Content>
                    <For each={OptionsList}>
                        {(option) => (
                            <Select.Option
                                selected={value().includes(option)}
                                value={option}
                            >
                                {displayOption(option)}
                            </Select.Option>
                        )}
                    </For>
                </Select.Content>
            </Select>
        );
    },
};

export const WithSearchbar: Story = {
    render: () => {
        const [value, setValue] = createSignal<string[]>([
            'option-1',
            'option-2',
        ]);
        const [searchQuery, setSearchQuery] = createSignal('');

        const filteredOptions = createMemo(() => {
            const query = searchQuery().trim().toLowerCase();

            if (query) {
                return OptionsList.filter((option) =>
                    option.toLowerCase().includes(query),
                );
            }
            return OptionsList;
        });

        return (
            <Select
                autoClose={false}
                onChange={(v) => {
                    if (value().includes(v)) {
                        setValue((prev) => prev.filter((i) => i !== v));
                        return;
                    }

                    setValue((prev) => [...prev, v]);
                }}
            >
                <Select.Trigger>
                    Select Option <Badge>{value().length}</Badge>
                </Select.Trigger>
                <Select.Content>
                    <Select.Filter>
                        <Select.Searchbar
                            query={searchQuery()}
                            setQuery={setSearchQuery}
                        />
                    </Select.Filter>
                    <For each={filteredOptions()}>
                        {(option) => (
                            <Select.Option
                                selected={value().includes(option)}
                                value={option}
                            >
                                {displayOption(option)}
                            </Select.Option>
                        )}
                    </For>
                </Select.Content>
            </Select>
        );
    },
};

export const Creatable: Story = {
    render: () => {
        const [options, setOptions] = createSignal<string[]>([
            'option-1',
            'option-2',
            'option-3',
        ]);
        const [value, setValue] = createSignal<string[]>([
            'option-1',
            'option-2',
        ]);
        const [searchQuery, setSearchQuery] = createSignal('');

        const filteredOptions = createMemo(() => {
            const list = options();
            const query = searchQuery().trim().toLowerCase();

            if (query) {
                return list.filter((option) =>
                    option.toLowerCase().includes(query),
                );
            }
            return list;
        });

        const createNewOption = (val: string) => {
            if (options().includes(val)) return;

            setOptions((prev) => [...prev, val]);
            setValue((prev) => [...prev, val]);
        };

        return (
            <Select
                autoClose={false}
                onChange={(v) => {
                    if (value().includes(v)) {
                        setValue((prev) => prev.filter((i) => i !== v));
                        return;
                    }

                    setValue((prev) => [...prev, v]);
                }}
            >
                <Select.Trigger>
                    Select Option <Badge>{value().length}</Badge>
                </Select.Trigger>
                <Select.Content>
                    <Select.Filter>
                        <Select.Searchbar
                            canCreateFromQuery={(val) =>
                                !options().includes(val)
                            }
                            onCreateNewOption={createNewOption}
                            query={searchQuery()}
                            setQuery={setSearchQuery}
                        />
                    </Select.Filter>
                    <For each={filteredOptions()}>
                        {(option) => (
                            <Select.Option
                                selected={value().includes(option)}
                                value={option}
                            >
                                {displayOption(option)}
                            </Select.Option>
                        )}
                    </For>
                </Select.Content>
            </Select>
        );
    },
};
