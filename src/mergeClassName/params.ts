import clsx from 'clsx';
import { ClassNameResult, ClassNameValue } from './types';

export function classNameStrategy<T>(
  currentResult: ClassNameResult,
  value: ClassNameValue,
): ClassNameResult | undefined {
  return clsx(currentResult, value);
}

export const classNameInitialValue = '';
