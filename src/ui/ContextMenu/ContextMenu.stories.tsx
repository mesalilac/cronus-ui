import { createSignal, For } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { ContextMenu } from './ContextMenu';

const meta = {
    title: 'Ui/ContextMenu',
    component: ContextMenu,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = createSignal('option-1');
        const [checked, setChecked] = createSignal(false);

        return (
            <ContextMenu>
                <ContextMenu.Trigger class='flex size-80 items-center justify-center rounded-default outline-dashed outline-2 outline-accent'>
                    Right click here
                </ContextMenu.Trigger>
                <ContextMenu.Content>
                    <ContextMenu.ItemCheckbox
                        checked={checked()}
                        onChange={setChecked}
                    >
                        Item
                    </ContextMenu.ItemCheckbox>
                    <ContextMenu.ItemSwitch
                        checked={checked()}
                        onChange={setChecked}
                    >
                        Item
                    </ContextMenu.ItemSwitch>
                    <ContextMenu.Item>Item</ContextMenu.Item>
                    <ContextMenu.Item>Item</ContextMenu.Item>
                    <ContextMenu.Separator />
                    <ContextMenu.Label>Label</ContextMenu.Label>
                    <ContextMenu.Item>Item</ContextMenu.Item>
                    <ContextMenu.Item>Item</ContextMenu.Item>
                    <ContextMenu.RadioGroup onChange={setValue} value={value()}>
                        <ContextMenu.RadioGroup.Item value='option-1'>
                            Option 1
                        </ContextMenu.RadioGroup.Item>
                        <ContextMenu.RadioGroup.Item value='option-2'>
                            Option 2
                        </ContextMenu.RadioGroup.Item>
                        <ContextMenu.RadioGroup.Item value='option-3'>
                            Option 3
                        </ContextMenu.RadioGroup.Item>
                    </ContextMenu.RadioGroup>
                </ContextMenu.Content>
            </ContextMenu>
        );
    },
};

export const SubMenu: Story = {
    render: () => {
        return (
            <ContextMenu>
                <ContextMenu.Trigger class='flex size-80 items-center justify-center rounded-default outline-dashed outline-2 outline-accent'>
                    Right click here
                </ContextMenu.Trigger>
                <ContextMenu.Content>
                    <ContextMenu.Item>Item</ContextMenu.Item>
                    <ContextMenu.Separator />
                    <ContextMenu.Item>Item</ContextMenu.Item>
                    <ContextMenu.Item>Item</ContextMenu.Item>
                    <ContextMenu.Item>Item</ContextMenu.Item>
                    <ContextMenu.Item>Item</ContextMenu.Item>
                    <ContextMenu.Sub>
                        <ContextMenu.Sub.Trigger>
                            Sub menu
                        </ContextMenu.Sub.Trigger>
                        <ContextMenu.Sub.Content>
                            <ContextMenu.Item>Item</ContextMenu.Item>
                            <ContextMenu.Item>Item</ContextMenu.Item>
                            <ContextMenu.Item>Item</ContextMenu.Item>
                        </ContextMenu.Sub.Content>
                    </ContextMenu.Sub>
                </ContextMenu.Content>
            </ContextMenu>
        );
    },
};

export const NestedSubMenu: Story = {
    render: () => {
        return (
            <ContextMenu>
                <ContextMenu.Trigger class='flex size-80 items-center justify-center rounded-default outline-dashed outline-2 outline-accent'>
                    Right click here
                </ContextMenu.Trigger>
                <ContextMenu.Content>
                    <ContextMenu.Item>Item</ContextMenu.Item>
                    <ContextMenu.Separator />
                    <ContextMenu.Item>Item</ContextMenu.Item>
                    <ContextMenu.Item>Item</ContextMenu.Item>
                    <ContextMenu.Item>Item</ContextMenu.Item>
                    <ContextMenu.Item>Item</ContextMenu.Item>
                    <ContextMenu.Sub>
                        <ContextMenu.Sub.Trigger>
                            Sub menu
                        </ContextMenu.Sub.Trigger>
                        <ContextMenu.Sub.Content>
                            <ContextMenu.Item>Item</ContextMenu.Item>
                            <ContextMenu.Item>Item</ContextMenu.Item>
                            <ContextMenu.Item>Item</ContextMenu.Item>
                            <ContextMenu.Sub>
                                <ContextMenu.Sub.Trigger>
                                    Sub menu
                                </ContextMenu.Sub.Trigger>
                                <ContextMenu.Sub.Content>
                                    <ContextMenu.Item>Item</ContextMenu.Item>
                                    <ContextMenu.Item>Item</ContextMenu.Item>
                                    <ContextMenu.Item>Item</ContextMenu.Item>
                                </ContextMenu.Sub.Content>
                            </ContextMenu.Sub>
                        </ContextMenu.Sub.Content>
                    </ContextMenu.Sub>
                </ContextMenu.Content>
            </ContextMenu>
        );
    },
};

export const NestedMenus: Story = {
    render: () => {
        const Card = (props: { num: number }) => {
            return (
                <ContextMenu>
                    <ContextMenu.Trigger class='rounded-default border border-accent/40 bg-accent/20 px-2 py-4'>
                        <span>Card {props.num}</span>
                    </ContextMenu.Trigger>
                    <ContextMenu.Content disableEventDelegation>
                        <ContextMenu.Label>
                            Card Menu {props.num}
                        </ContextMenu.Label>
                        <ContextMenu.Separator />
                        <ContextMenu.Item>Item</ContextMenu.Item>
                        <ContextMenu.Item>Item</ContextMenu.Item>
                        <ContextMenu.Item>Item</ContextMenu.Item>
                        <ContextMenu.Item>Item</ContextMenu.Item>
                    </ContextMenu.Content>
                </ContextMenu>
            );
        };

        return (
            <ContextMenu>
                <ContextMenu.Trigger class='flex size-80 flex-col gap-2 overflow-y-auto rounded-default p-4 outline-dashed outline-2 outline-accent'>
                    <For each={[1, 2, 3, 4, 5, 6, 7, 8]}>
                        {(num) => <Card num={num} />}
                    </For>
                </ContextMenu.Trigger>
                <ContextMenu.Content disableEventDelegation>
                    <ContextMenu.Label>App Menu</ContextMenu.Label>
                    <ContextMenu.Separator />
                    <ContextMenu.Item>Item</ContextMenu.Item>
                    <ContextMenu.Item>Item</ContextMenu.Item>
                    <ContextMenu.Item>Item</ContextMenu.Item>
                    <ContextMenu.Item>Item</ContextMenu.Item>
                </ContextMenu.Content>
            </ContextMenu>
        );
    },
};
