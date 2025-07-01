import mergeValue from '../mergeValue';
import { refInitialValue, refStrategy } from './params';
import { RefResult, RefValue } from './types';

/**
 * refのマージを行う関数
 * @param refList
 * @returns
 */
export default function mergeRef<T>(...refList: RefValue<T>[]): RefResult<T> {
  return mergeValue<RefValue<T>, RefResult<T>>(refList, refStrategy<T>, {
    initialValue: refInitialValue,
  });
}
