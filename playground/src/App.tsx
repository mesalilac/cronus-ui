import { createSignal, For } from 'solid-js';

import { Badge, Button, Modal, Select } from '~/ui';

import { Hello } from '../../src';

export function App() {
    const [showModal, setShowModal] = createSignal(false);

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

    return (
        <div>
            <Hello />
            <Button
                onClick={() => setShowModal(true)}
                type='button'
                variant='outline'
            >
                Open Modal
            </Button>
            <Modal onOpenChange={setShowModal} open={showModal()}>
                <Modal.Body>hi</Modal.Body>
                <Modal.Footer />
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
        </div>
    );
}
