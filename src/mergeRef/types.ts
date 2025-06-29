import { MutableRefObject, RefCallback } from 'react';

export type RefValue<T> =
  | RefArray<T>
  | RefCallback<T>
  | MutableRefObject<T>
  | boolean
  | null
  | undefined;

export type RefArray<T> = Array<RefValue<T>>;

export type RefResult<T> = RefCallback<T>;
