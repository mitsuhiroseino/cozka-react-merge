import isFunction from 'lodash-es/isFunction';
import { HandlerResult, HandlerValue } from './types';

export function handlerStrategy<T>(
  currentResult: HandlerResult,
  value: HandlerValue,
): HandlerResult | undefined {
  if (isFunction(value)) {
    return <T>(...args: T[]) => {
      currentResult && currentResult(...args);
      value(...args);
    };
  }
}

export const handlerInitialValue = undefined;
