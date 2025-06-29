import assignIf from '@cozka/utils-object/assignIf';
import isFunction from 'lodash-es/isFunction';
import isPlainObject from 'lodash-es/isPlainObject';
import { StyleResult, StyleValue } from './types';

export function styleStrategy(
  currentResult: StyleResult,
  value: StyleValue,
): StyleResult | undefined {
  if (isFunction(value)) {
    return assignIf(currentResult, value(currentResult));
  } else if (isPlainObject(value)) {
    return assignIf(currentResult, value);
  }
}

export function styleInitialValue() {
  return {} as StyleResult;
}
