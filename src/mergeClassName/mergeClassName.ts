import mergeValue from '../mergeValue';
import { classNameInitialValue, classNameStrategy } from './params';
import { ClassNameResult, ClassNameValue } from './types';

/**
 * クラスのマージを行う関数
 * @param classNames
 * @returns
 */
export default function mergeClassName(
  ...classNames: ClassNameValue[]
): ClassNameResult {
  return mergeValue<ClassNameValue, ClassNameResult>(
    classNames,
    classNameStrategy,
    {
      initialValue: classNameInitialValue,
    },
  );
}
