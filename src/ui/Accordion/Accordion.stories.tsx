import type { VoidComponent } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

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
            Id tempor labore tempor in nisi eiusmod laborum veniam enim
            consectetur cillum sunt eu. Cillum laborum ex irure amet aliquip
            labore id anim ex dolor magna occaecat amet dolore. Deserunt fugiat
            duis do nostrud nisi magna non exercitation ad culpa mollit enim
            labore in. Officia aliquip id non labore minim labore amet velit
            reprehenderit eu anim ad. Eu non eiusmod aliquip velit officia
            consequat sunt. Aute reprehenderit exercitation nulla excepteur non
            irure irure quis nostrud. Sunt eu ullamco eiusmod elit nisi
            consectetur consectetur cupidatat. Quis consequat laboris labore
            aliquip dolor velit adipisicing ea officia magna. Qui laboris
            consectetur voluptate nostrud deserunt voluptate. Quis deserunt ad
            aliquip incididunt non anim consectetur magna quis adipisicing
            officia. Eu minim magna sit esse consequat aliqua ut officia
            reprehenderit incididunt et tempor pariatur.
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
