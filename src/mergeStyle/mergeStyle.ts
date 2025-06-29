import mergeValue from '../mergeValue';
import { styleInitialValue, styleStrategy } from './params';
import { StyleResult, StyleValue } from './types';

/**
 * スタイルのマージを行う関数
 * @param styles
 * @returns
 */
export default function mergeStyle(...styles: StyleValue[]): StyleResult {
  return mergeValue<StyleValue, StyleResult>(styles, styleStrategy, {
    initialValue: styleInitialValue,
  });
}
