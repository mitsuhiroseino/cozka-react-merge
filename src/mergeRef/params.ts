import setRefCurrent from '@cozka/react-utils/setRefCurrent';
import isFunction from 'lodash-es/isFunction';
import isPlainObject from 'lodash-es/isPlainObject';
import { Ref } from 'react';
import { RefResult, RefValue } from './types';

export function refStrategy<T>(
  currentResult: RefResult<T>,
  value: RefValue<T>,
): RefResult<T> | undefined {
  if (isRef(value)) {
    return (target: T) => setRefCurrent(target, currentResult, value);
  }
}

export const refInitialValue = undefined;

function isRef<T>(value: RefValue<T>): value is Ref<T> {
  return (
    (isPlainObject(value) && 'current' in (value as object)) ||
    isFunction(value)
  );
}
