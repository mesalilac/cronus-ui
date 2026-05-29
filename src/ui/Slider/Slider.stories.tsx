import { createSignal, Match, Switch } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

import {
    IconMediaVolumeMax,
    IconMediaVolumeMin,
    IconMediaVolumeOff,
} from '~/icons';
import { Button } from '~/ui/Button';
import { Label } from '~/ui/Label';

import { Slider } from './Slider';

const meta = {
    title: 'Ui/Slider',
    component: Slider,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = createSignal(30);

        return (
            <div class='flex flex-col gap-2'>
                <Slider onInput={setValue} value={value()}>
                    <Slider.Input />
                </Slider>
            </div>
        );
    },
};

export const WithLabel: Story = {
    render: () => {
        const [value, setValue] = createSignal(20);

        return (
            <div class='flex flex-col gap-2'>
                <Label class='flex justify-between'>
                    <span>Volume</span>
                    <span>{value()}%</span>
                </Label>
                <Slider onInput={setValue} value={value()}>
                    <Slider.Input />
                </Slider>
            </div>
        );
    },
};

export const WithIcon: Story = {
    render: () => {
        const [value, setValue] = createSignal(20);

        return (
            <div class='flex flex-col gap-2'>
                <Label>
                    <span>Volume</span>
                </Label>
                <div class='flex items-center gap-2'>
                    <Switch>
                        <Match when={value() === 0}>
                            <IconMediaVolumeOff class='size-5' />
                        </Match>
                        <Match when={value() >= 80}>
                            <IconMediaVolumeMax class='size-5' />
                        </Match>
                        <Match when={value() < 80}>
                            <IconMediaVolumeMin class='size-5' />
                        </Match>
                    </Switch>
                    <Slider onInput={setValue} value={value()}>
                        <Slider.Input />
                    </Slider>
                    <span class='w-8 text-right text-sm tabular-nums'>
                        {value()}%
                    </span>
                </div>
            </div>
        );
    },
};

export const WithExternalButton: Story = {
    render: () => {
        const [value, setValue] = createSignal(20);
        const [prevValue, setPrevValue] = createSignal<number | null>(null);

        const toggleMute = () => {
            if (value() !== 0) setPrevValue(value());

            if (value() === 0) setValue(prevValue() ?? 0);
            else setValue(0);
        };

        return (
            <div class='flex flex-col gap-2'>
                <Label>
                    <span>Volume</span>
                </Label>
                <div class='flex items-center gap-2'>
                    <Button onClick={toggleMute} size='icon' variant='ghost'>
                        <Switch>
                            <Match when={value() === 0}>
                                <IconMediaVolumeOff class='size-5' />
                            </Match>
                            <Match when={value() >= 80}>
                                <IconMediaVolumeMax class='size-5' />
                            </Match>
                            <Match when={value() < 80}>
                                <IconMediaVolumeMin class='size-5' />
                            </Match>
                        </Switch>
                    </Button>
                    <Slider onInput={setValue} value={value()}>
                        <Slider.ToolTip />
                        <Slider.Input />
                    </Slider>
                    <span class='w-8 text-right text-sm tabular-nums'>
                        {value()}%
                    </span>
                </div>
            </div>
        );
    },
};

export const WithMarkers: Story = {
    render: () => {
        const [value, setValue] = createSignal(20);

        return (
            <div class='flex flex-col gap-2'>
                <Label class='flex justify-between'>
                    <span>Volume</span>
                    <span>{value()}%</span>
                </Label>
                <Slider list='markers' onInput={setValue} value={value()}>
                    <Slider.Input />
                </Slider>
                <datalist id='markers'>
                    <option value='0' />
                    <option value='25' />
                    <option value='50' />
                    <option value='75' />
                    <option value='100' />
                </datalist>
            </div>
        );
    },
};

export const Tooltip: Story = {
    render: () => {
        const [value, setValue] = createSignal(30);

        return (
            <Slider onInput={setValue} value={value()}>
                <Slider.ToolTip />
                <Slider.Input />
            </Slider>
        );
    },
};

export const TooltipBottom: Story = {
    render: () => {
        const [value, setValue] = createSignal(30);

        return (
            <Slider onInput={setValue} value={value()}>
                <Slider.ToolTip placement='bottom' />
                <Slider.Input />
            </Slider>
        );
    },
};

export const TooltipCustomLabel: Story = {
    render: () => {
        const [value, setValue] = createSignal(30);

        return (
            <Slider onInput={setValue} value={value()}>
                <Slider.ToolTip>
                    {(value) => {
                        return <>value: {value}</>;
                    }}
                </Slider.ToolTip>
                <Slider.Input />
            </Slider>
        );
    },
};

export const HideThumb: Story = {
    render: () => {
        const [value, setValue] = createSignal(30);

        return (
            <Slider onInput={setValue} value={value()}>
                <Slider.Input hideThumb />
            </Slider>
        );
    },
};

export const Disabled: Story = {
    render: () => {
        const [value, setValue] = createSignal(30);

        return (
            <Slider disabled onInput={setValue} value={value()}>
                <Slider.Input />
            </Slider>
        );
    },
};
