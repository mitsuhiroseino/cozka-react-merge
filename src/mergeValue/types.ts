/**
 * 値をマージする処理
 * undefined以外を返すとその値が次回のcurrentResultとして扱われる。
 *
 * @param currentResult 現在の結果
 * @param value マージ対象の値
 * @param status 現在の状態
 */
export type MergeStrategy<V = any, R = any> = (
  currentResult: R,
  value: V | V[] | R,
  status: CurrentStatus,
) => R | undefined;

export type MergeValueOptions<V = any, R = any> = {
  /**
   * 初期値
   */
  initialValue?: R | InitailValueFn<V, R>;
};

export type InitailValueFn<V = any, R = any> = (
  values: V | V[],
  status: CurrentStatus,
) => R;

/**
 * 現在の状態
 */
export type CurrentStatus = {
  /**
   * 値の親がオブジェクトの場合のキー
   */
  key?: string | number | symbol;

  /**
   * 値の親が配列の場合のインデックス
   */
  index?: number;
};
