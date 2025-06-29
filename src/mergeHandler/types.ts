import { EventHandler, MutableRefObject, RefCallback } from 'react';

export type HandlerValue =
  | HandlerArray
  | HandlerFn
  | boolean
  | null
  | undefined;

export type HandlerArray = Array<HandlerValue>;

export type HandlerResult = HandlerFn;

export type HandlerFn = <T>(...args: T[]) => void;
