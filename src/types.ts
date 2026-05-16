import type { ComponentProps, ValidComponent } from 'solid-js';

export type TimeoutHandle = ReturnType<typeof setTimeout>;
export type PartialComponentProps<T extends ValidComponent> = Partial<ComponentProps<T>>;
