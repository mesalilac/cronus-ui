import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { DropdownMenu } from './DropdownMenu';

const meta = {
    title: 'Ui/DropdownMenu',
    component: DropdownMenu,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = createSignal('option-1');
        const [checked, setChecked] = createSignal(false);

        return (
            <DropdownMenu>
                <DropdownMenu.Trigger>Menu</DropdownMenu.Trigger>
                <DropdownMenu.Content>
                    <DropdownMenu.ItemCheckbox
                        checked={checked()}
                        onChange={setChecked}
                    >
                        Item
                    </DropdownMenu.ItemCheckbox>
                    <DropdownMenu.ItemSwitch
                        checked={checked()}
                        onChange={setChecked}
                    >
                        Item
                    </DropdownMenu.ItemSwitch>
                    <DropdownMenu.Item>Item</DropdownMenu.Item>
                    <DropdownMenu.Item>Item</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Label>Label</DropdownMenu.Label>
                    <DropdownMenu.Item>Item</DropdownMenu.Item>
                    <DropdownMenu.Item>Item</DropdownMenu.Item>
                    <DropdownMenu.RadioGroup
                        onChange={setValue}
                        value={value()}
                    >
                        <DropdownMenu.RadioGroup.Item value='option-1'>
                            Option 1
                        </DropdownMenu.RadioGroup.Item>
                        <DropdownMenu.RadioGroup.Item value='option-2'>
                            Option 2
                        </DropdownMenu.RadioGroup.Item>
                        <DropdownMenu.RadioGroup.Item value='option-3'>
                            Option 3
                        </DropdownMenu.RadioGroup.Item>
                    </DropdownMenu.RadioGroup>
                </DropdownMenu.Content>
            </DropdownMenu>
        );
    },
};

export const SubMenu: Story = {
    render: () => {
        return (
            <DropdownMenu>
                <DropdownMenu.Trigger>Menu</DropdownMenu.Trigger>
                <DropdownMenu.Content>
                    <DropdownMenu.Item>Item</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>Item</DropdownMenu.Item>
                    <DropdownMenu.Item>Item</DropdownMenu.Item>
                    <DropdownMenu.Item>Item</DropdownMenu.Item>
                    <DropdownMenu.Item>Item</DropdownMenu.Item>
                    <DropdownMenu.Sub>
                        <DropdownMenu.Sub.Trigger>
                            Sub menu
                        </DropdownMenu.Sub.Trigger>
                        <DropdownMenu.Sub.Content>
                            <DropdownMenu.Item>Item</DropdownMenu.Item>
                            <DropdownMenu.Item>Item</DropdownMenu.Item>
                            <DropdownMenu.Item>Item</DropdownMenu.Item>
                        </DropdownMenu.Sub.Content>
                    </DropdownMenu.Sub>
                </DropdownMenu.Content>
            </DropdownMenu>
        );
    },
};

export const NestedSubMenu: Story = {
    render: () => {
        return (
            <DropdownMenu>
                <DropdownMenu.Trigger>Menu</DropdownMenu.Trigger>
                <DropdownMenu.Content>
                    <DropdownMenu.Item>Item</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>Item</DropdownMenu.Item>
                    <DropdownMenu.Item>Item</DropdownMenu.Item>
                    <DropdownMenu.Item>Item</DropdownMenu.Item>
                    <DropdownMenu.Item>Item</DropdownMenu.Item>
                    <DropdownMenu.Sub>
                        <DropdownMenu.Sub.Trigger>
                            Sub menu
                        </DropdownMenu.Sub.Trigger>
                        <DropdownMenu.Sub.Content>
                            <DropdownMenu.Item>Item</DropdownMenu.Item>
                            <DropdownMenu.Item>Item</DropdownMenu.Item>
                            <DropdownMenu.Item>Item</DropdownMenu.Item>
                            <DropdownMenu.Sub>
                                <DropdownMenu.Sub.Trigger>
                                    Sub menu
                                </DropdownMenu.Sub.Trigger>
                                <DropdownMenu.Sub.Content>
                                    <DropdownMenu.Item>Item</DropdownMenu.Item>
                                    <DropdownMenu.Item>Item</DropdownMenu.Item>
                                    <DropdownMenu.Item>Item</DropdownMenu.Item>
                                </DropdownMenu.Sub.Content>
                            </DropdownMenu.Sub>
                        </DropdownMenu.Sub.Content>
                    </DropdownMenu.Sub>
                </DropdownMenu.Content>
            </DropdownMenu>
        );
    },
};
