import {
  InitailValueFn,
  MergeStrategy,
  MergeValueOptions,
} from '../mergeValue';

export type MergeStrategyItem<V = any, R = any> = {
  /**
   * 下記の条件に合致したときにstrategyを実行する
   * 未指定の場合は無条件で実行される
   *
   * - string: プロパティのキーと完全に合致する場合
   * - RegExp: プロパティのキーが正規表現にマッチする場合
   * - function: 関数がtrueを返す場合
   */
  condition?: MergeCondition;

  /**
   * 初期値
   */
  initialValue?: R | InitailValueFn<V, R>;

  /**
   * マージ処理
   */
  strategy: MergeStrategy<V, R>;
};

/**
 * マージ要否判定条件
 */
export type MergeCondition =
  | string
  | RegExp
  | ((key: PropertyKey, value: unknown) => boolean);

export type MergeObjectOptions<V = any, R = any> = MergeValueOptions<V, R> & {};
