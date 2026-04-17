import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(...inputs));

export const clamp = (value: number, min: number, max: number): number =>
    Math.min(Math.max(value, min), max);

export const randomInt = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1) + min);

export const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

export const arrayFirst = <T>(arr: T[], n = 1) => {
    return arr.slice(0, n);
};

export const arrayLast = <T>(arr: T[], n = 1) => {
    return arr.slice(-n);
};

export const arrayRandom = <T>(arr: T[]) => {
    return arr[randomInt(0, arr.length - 1)];
};

/**
 * Capitalizes the first letter of a string
 */
export const capitalize = (str: string): string => {
    if (str.length === 0) return str;

    const first = str.charAt(0).toUpperCase();
    const rest = str.slice(1);

    return first + rest;
};

/**
 * Converts to "Title Case"
 */
export const toTitleCase = (str: string): string =>
    str
        .toLowerCase()
        .split(' ')
        .map((word) => capitalize(word))
        .join(' ');

/**
 * Converts to "camelCase"
 */
export const toCamelCase = (str: string): string =>
    str
        .replace(/[-_\s]+(.)?/g, (_, c) =>
            c !== undefined && c !== '' ? c.toUpperCase() : '',
        )
        .replace(/^[A-Z]/, (c) => c.toLowerCase());

/**
 * Converts to "PascalCase"
 */
export const toPascalCase = (str: string): string => {
    const camel = toCamelCase(str);

    if (camel.length === 0) return camel;

    return camel.charAt(0).toUpperCase() + camel.slice(1);
};

/**
 * Converts to "snake_case"
 */
export const toSnakeCase = (str: string): string =>
    str
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/[-\s]+/g, '_')
        .toLowerCase();

/**
 * Converts to "kebab-case"
 */
export const toKebabCase = (str: string): string =>
    str
        .replace(/([a-z])([A-Z])/g, '$1-$1')
        .replace(/[_\s]+/g, '-')
        .toLowerCase();

/**
 * Converts to "CONSTANT_CASE"
 */
export const toConstantCase = (str: string): string =>
    toSnakeCase(str).toUpperCase();

/**
 * Converts to "dot.case"
 */
export const toDotCase = (str: string): string =>
    str
        .replace(/([a-z])([A-Z])/g, '$1.$2')
        .replace(/[-_\s]+/g, '.')
        .toLowerCase();

/**
 * Converts to "path/case"
 */
export const toPathCase = (str: string): string =>
    str
        .replace(/([a-z])([A-Z])/g, '$1/$2')
        .replace(/[-_\s]+/g, '/')
        .toLowerCase();
