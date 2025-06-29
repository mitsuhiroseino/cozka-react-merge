import mergeValue from '../mergeValue';
import { refInitialValue, refStrategy } from './params';
import { RefResult, RefValue } from './types';

/**
 * refのマージを行う関数
 * @param refs
 * @returns
 */
export default function mergeRef<T>(...refs: RefValue<T>[]): RefResult<T> {
  return mergeValue<RefValue<T>, RefResult<T>>(refs, refStrategy<T>, {
    initialValue: refInitialValue,
  });
}
