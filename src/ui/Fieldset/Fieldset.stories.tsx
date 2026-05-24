import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import { Field } from '~/ui/Field';
import { Input } from '~/ui/Input';

import { Fieldset } from './Fieldset';

type StoryComponent = typeof Fieldset;

const meta = {
    title: 'Ui/Fieldset',
    component: Fieldset,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StoryComponent>;

export default meta;

type Story = StoryObj<StoryComponent>;

export const Default: Story = {
    render: () => {
        return (
            <div class='size-96'>
                <Fieldset>
                    <Fieldset.Legend>Shipping details</Fieldset.Legend>
                    <Fieldset.Description>
                        Without this your odds of getting your order are low.
                    </Fieldset.Description>
                    <Field>
                        <Field.Label>Full name</Field.Label>
                        <Input value='' />
                    </Field>
                    <Field>
                        <Field.Label>Street address</Field.Label>
                        <Input value='' />
                    </Field>
                </Fieldset>
            </div>
        );
    },
};

export const LegendStart: Story = {
    render: () => {
        return (
            <div class='size-96'>
                <Fieldset>
                    <Fieldset.Legend placement='start'>
                        Shipping details
                    </Fieldset.Legend>
                    <Fieldset.Description>
                        Without this your odds of getting your order are low.
                    </Fieldset.Description>
                    <Field>
                        <Field.Label>Full name</Field.Label>
                        <Input value='' />
                    </Field>
                    <Field>
                        <Field.Label>Street address</Field.Label>
                        <Input value='' />
                    </Field>
                </Fieldset>
            </div>
        );
    },
};
export const LegendCenter: Story = {
    render: () => {
        return (
            <div class='size-96'>
                <Fieldset>
                    <Fieldset.Legend placement='center'>
                        Shipping details
                    </Fieldset.Legend>
                    <Fieldset.Description>
                        Without this your odds of getting your order are low.
                    </Fieldset.Description>
                    <Field>
                        <Field.Label>Full name</Field.Label>
                        <Input value='' />
                    </Field>
                    <Field>
                        <Field.Label>Street address</Field.Label>
                        <Input value='' />
                    </Field>
                </Fieldset>
            </div>
        );
    },
};
export const LegendEnd: Story = {
    render: () => {
        return (
            <div class='size-96'>
                <Fieldset>
                    <Fieldset.Legend placement='end'>
                        Shipping details
                    </Fieldset.Legend>
                    <Fieldset.Description>
                        Without this your odds of getting your order are low.
                    </Fieldset.Description>
                    <Field>
                        <Field.Label>Full name</Field.Label>
                        <Input value='' />
                    </Field>
                    <Field>
                        <Field.Label>Street address</Field.Label>
                        <Input value='' />
                    </Field>
                </Fieldset>
            </div>
        );
    },
};
