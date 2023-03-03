import { get, writable, type Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

type StorageType = 'local' | 'session';

const parse = (str: string) =>
    JSON.parse(str, (key, value) => {
        //key is ignored
        if (value instanceof Array) {
            return new Set(value);
        }
        return value;
    });

const stringify = (obj: any) =>
    JSON.stringify(obj, (key, value) => {
        //key is ignored
        if (value instanceof Set) {
            return [...value];
        }
        return value;
    });

export function localStorageSetStore<T>(
    key: string,
    initialValue: Set<T>,
    storageType: StorageType = 'local'
): Writable<T> {
    return localStorageStore(key, initialValue, {
        serializer: {
            parse,
            stringify
        },
        storageType
    });
}

export const unionTagMatchStore = localStorageSetStore<string>('anyTags', new Set());
