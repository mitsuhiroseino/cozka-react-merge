import mergeValue from '../mergeValue';
import { handlerInitialValue, handlerStrategy } from './params';
import { HandlerResult, HandlerValue } from './types';

/**
 * ハンドラーのマージを行う関数
 * @param handlers
 * @returns
 */
export default function mergeRef<T>(
  ...handlers: HandlerValue[]
): HandlerResult {
  return mergeValue<HandlerValue, HandlerResult>(handlers, handlerStrategy<T>, {
    initialValue: handlerInitialValue,
  });
}
