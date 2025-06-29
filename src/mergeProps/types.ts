import { CSSProperties, Ref } from 'react';
import { ClassNameValue } from '../mergeClassName';
import { MergeObjectOptions } from '../mergeObject';
import { RefValue } from '../mergeRef';
import { StyleValue } from '../mergeStyle';

export type MergePropsOptions<PROPS, REF> = MergeObjectOptions<
  PropsValue<PROPS, REF>,
  PropsResult<PROPS, REF>
>;

export type PropsValue<PROPS, REF> =
  | PropsArray<PROPS, REF>
  | Props<PROPS, REF>
  | ((currentResult: PropsResult<PROPS, REF>) => PropsResult<PROPS, REF>)
  | boolean
  | null
  | undefined;

export type PropsArray<PROPS, REF> = Array<PropsValue<PROPS, REF>>;

export type PropsResult<PROPS, REF> = PropsResultBase<PROPS, REF>;

type Props<PROPS, REF> = Omit<
  PropsResultBase<PROPS, REF>,
  'ref' | 'className' | 'style'
> & {
  ref?: RefValue<REF>;
  className?: ClassNameValue;
  style?: StyleValue;
};

type PropsResultBase<PROPS, REF> = PROPS & {
  ref?: Ref<REF>;
  className?: string;
  style?: CSSProperties;
};
