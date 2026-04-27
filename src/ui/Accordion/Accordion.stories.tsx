import { createSignal, type VoidComponent } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Button } from '~/ui/Button';

import { Accordion } from './Accordion';

const meta = {
    title: 'Ui/Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof Accordion>;

const PlaceholderContent: VoidComponent = () => {
    return (
        <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius
            tellus vehicula, gravida leo sit amet, interdum arcu. Sed nec nunc
            in urna vehicula varius vel nec ex. Integer nec imperdiet dolor, id
            blandit augue. Cras sit amet felis ante. Proin vitae sodales ipsum.
            Aenean pellentesque lacus turpis, in feugiat enim eleifend eget.
            Nunc egestas laoreet mi, id venenatis nisl eleifend vel.
        </>
    );
};

export const Default: Story = {
    render: () => {
        return (
            <div class='size-96'>
                <Accordion>
                    <Accordion.Item>
                        <Accordion.Trigger>Accordion 1</Accordion.Trigger>
                        <Accordion.Content>
                            <PlaceholderContent />
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item>
                        <Accordion.Trigger>Accordion 2</Accordion.Trigger>
                        <Accordion.Content>
                            <PlaceholderContent />
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item>
                        <Accordion.Trigger>Accordion 3</Accordion.Trigger>
                        <Accordion.Content>
                            <PlaceholderContent />
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item>
                        <Accordion.Trigger>Accordion 4</Accordion.Trigger>
                        <Accordion.Content>
                            <PlaceholderContent />
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    },
};

export const Multiple: Story = {
    render: () => {
        return (
            <div class='size-96'>
                <Accordion multiple>
                    <Accordion.Item>
                        <Accordion.Trigger>Accordion 1</Accordion.Trigger>
                        <Accordion.Content>
                            <PlaceholderContent />
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item>
                        <Accordion.Trigger>Accordion 2</Accordion.Trigger>
                        <Accordion.Content>
                            <PlaceholderContent />
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item>
                        <Accordion.Trigger>Accordion 3</Accordion.Trigger>
                        <Accordion.Content>
                            <PlaceholderContent />
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item>
                        <Accordion.Trigger>Accordion 4</Accordion.Trigger>
                        <Accordion.Content>
                            <PlaceholderContent />
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    },
};

export const ExternalControl: Story = {
    render: () => {
        const [expandedItem, setExpandedItem] = createSignal<string[]>([]);

        const toggleExpandedItem = (id: string) => {
            const list = expandedItem();

            if (list.includes(id))
                setExpandedItem(list.filter((i) => i !== id));
            else setExpandedItem([...list, id]);
        };

        return (
            <div class='flex size-96 flex-col gap-2'>
                <Button onClick={() => toggleExpandedItem('accordion-1')}>
                    Toggle Accordion 1
                </Button>
                <Button onClick={() => toggleExpandedItem('accordion-2')}>
                    Toggle Accordion 2
                </Button>
                <Accordion onChange={setExpandedItem} value={expandedItem()}>
                    <Accordion.Item value='accordion-1'>
                        <Accordion.Trigger>Accordion 1</Accordion.Trigger>
                        <Accordion.Content>
                            <PlaceholderContent />
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item value='accordion-2'>
                        <Accordion.Trigger>Accordion 2</Accordion.Trigger>
                        <Accordion.Content>
                            <PlaceholderContent />
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item value='accordion-3'>
                        <Accordion.Trigger>Accordion 3</Accordion.Trigger>
                        <Accordion.Content>
                            <PlaceholderContent />
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item value='accordion-4'>
                        <Accordion.Trigger>Accordion 4</Accordion.Trigger>
                        <Accordion.Content>
                            <PlaceholderContent />
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    },
};

export const Disabled: Story = {
    render: () => {
        return (
            <div class='size-96'>
                <Accordion disabled>
                    <Accordion.Item>
                        <Accordion.Trigger>Accordion 1</Accordion.Trigger>
                        <Accordion.Content>
                            <PlaceholderContent />
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item>
                        <Accordion.Trigger>Accordion 2</Accordion.Trigger>
                        <Accordion.Content>
                            <PlaceholderContent />
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item>
                        <Accordion.Trigger>Accordion 3</Accordion.Trigger>
                        <Accordion.Content>
                            <PlaceholderContent />
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item>
                        <Accordion.Trigger>Accordion 4</Accordion.Trigger>
                        <Accordion.Content>
                            <PlaceholderContent />
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    },
};
