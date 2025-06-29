import { CSSProperties } from 'react';

export type StyleValue =
  | StyleArray
  | CSSProperties
  | ((currentResult: StyleResult) => CSSProperties)
  | boolean
  | null
  | undefined;

export type StyleArray = Array<StyleValue>;

export type StyleResult = CSSProperties;
