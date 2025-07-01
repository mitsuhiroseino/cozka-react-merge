import mergeValue from '../mergeValue';
import { handlerInitialValue, handlerStrategy } from './params';
import { HandlerResult, HandlerValue } from './types';

/**
 * ハンドラーのマージを行う関数
 * @param handlerList
 * @returns
 */
export default function mergeRef<T>(
  ...handlerList: HandlerValue[]
): HandlerResult {
  return mergeValue<HandlerValue, HandlerResult>(
    handlerList,
    handlerStrategy<T>,
    {
      initialValue: handlerInitialValue,
    },
  );
}
