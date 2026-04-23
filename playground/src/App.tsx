import { createSignal, For } from 'solid-js';

import { Badge, Button, DropdownMenu, Modal, Select } from '~/ui';

export function App() {
    const NumbersList = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
    ] as const;

    const [numbers, setNumbers] = createSignal<string[]>([]);

    const [isMenuOpen, setIsMenuOpen] = createSignal(false);

    return (
        <div class='flex flex-col items-start gap-2'>
            <Button
                onClick={() => {
                    document.documentElement.classList.toggle('dark');
                }}
                variant='outline'
            >
                theme is
                <span class='hidden dark:block'>dark</span>
                <span class='block dark:hidden'>light</span>
            </Button>
            <Modal>
                <Modal.Trigger>Open Modal</Modal.Trigger>
                <Modal.Content>
                    <Modal.Content.Header>
                        <Modal.Content.Header.Title>
                            Modal Title
                        </Modal.Content.Header.Title>
                        <Modal.Content.Header.Description>
                            Modal Description
                        </Modal.Content.Header.Description>
                    </Modal.Content.Header>
                    <Modal.Content.Body>
                        <p>Modal Content</p>
                    </Modal.Content.Body>
                    <Modal.Content.Footer>x</Modal.Content.Footer>
                </Modal.Content>
            </Modal>
            <Select
                autoClose={false}
                onChange={(v) => {
                    if (numbers().includes(v)) {
                        setNumbers((prev) => prev.filter((i) => i !== v));
                        return;
                    }

                    setNumbers((prev) => [...prev, v]);
                }}
            >
                <Select.Trigger>
                    Numbers <Badge>{numbers().length}</Badge>
                </Select.Trigger>
                <Select.Content>
                    <For each={NumbersList}>
                        {(item) => (
                            <Select.Option
                                selected={numbers().includes(item)}
                                value={item}
                            >
                                {item}
                            </Select.Option>
                        )}
                    </For>
                </Select.Content>
            </Select>
            <DropdownMenu onOpenChange={setIsMenuOpen} open={isMenuOpen()}>
                <DropdownMenu.Trigger>Open Menu</DropdownMenu.Trigger>
                <DropdownMenu.Content>
                    <DropdownMenu.Item>Item 1</DropdownMenu.Item>
                    <DropdownMenu.Item>Item 2</DropdownMenu.Item>
                    <DropdownMenu.Item>Item 3</DropdownMenu.Item>
                    <DropdownMenu.Item>Item 4</DropdownMenu.Item>
                    <DropdownMenu.Item>Item 5</DropdownMenu.Item>
                    <DropdownMenu.Item>Item 6</DropdownMenu.Item>
                    <DropdownMenu.Item>Item 7</DropdownMenu.Item>
                    <DropdownMenu.Item>Item 8</DropdownMenu.Item>
                    <DropdownMenu.Item>Item 9</DropdownMenu.Item>
                    <DropdownMenu.Item>Item 10</DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu>
        </div>
    );
}
