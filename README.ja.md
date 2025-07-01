# @cozka/react-merge

`@cozka/react-merge` は、Reactコンポーネントのprops（プロパティ）を簡単にマージできる関数を提供するパッケージです。
複数の `ref` や `className`、`style`、イベントハンドラーなどをうまく結合したいときに便利です。

**[English README is available here](./README.md)**

---

## インストール

```sh
npm install @cozka/react-merge
```

---

## 使い方

```tsx
import mergeProps from '@cozka/react-merge/mergeProps';
import { forwardRef, useRef } from 'react';

const App = forwardRef((props, ref) => {
  const myRef = useRef();

  const newProps = mergeProps(
    {
      ref: [ref, myRef],
      className: 'app',
      style: { backgroundColor: 'red' },
      onChange: (event) => console.log(event),
    },
    props,
  );

  return <div {...newProps}>App</div>;
});
```

`mergeProps` を使えば、渡された複数のpropsをいい感じにマージできます。

---

## API

### `mergeRef(...refList)`

複数の `ref` を1つの関数にまとめます。

#### 引数

| 引数名    | 型                                      | 説明                                                                     |
| --------- | --------------------------------------- | ------------------------------------------------------------------------ |
| `refList` | `(Ref \| false \| null \| undefined)[]` | マージしたい `ref` の配列。`false`, `null`, `undefined` は無視されます。 |

#### 戻り値

すべての `ref` に値を割り当てられる1つの関数を返します。

---

### `mergeClassName(...classNameList)`

複数の `className` をスペース区切りで結合します。

#### 引数

| 引数名          | 型                                         | 説明                                                                         |
| --------------- | ------------------------------------------ | ---------------------------------------------------------------------------- |
| `classNameList` | `(string \| false \| null \| undefined)[]` | 結合したい `className` の配列。`false`, `null`, `undefined` は無視されます。 |

#### 戻り値

すべての `className` をスペースでつないだ1つの文字列を返します。

---

### `mergeStyle(...styleList)`

複数の `style` オブジェクトを1つにまとめます。

#### 引数

| 引数名      | 型                                                | 説明                                                                    |
| ----------- | ------------------------------------------------- | ----------------------------------------------------------------------- |
| `styleList` | `(CSSProperties \| false \| null \| undefined)[]` | 結合したいスタイルの配列。`false`, `null`, `undefined` は無視されます。 |

#### 戻り値

後に指定されたスタイルが優先される形で、すべての `style` をマージしたオブジェクトを返します。

---

### `mergeHandler(...handlerList)`

複数のイベントハンドラーを1つにまとめて、すべてを順に実行する関数を作ります。

#### 引数

| 引数名        | 型                                                             | 説明                                                                              |
| ------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `handlerList` | `(((...args: any[]) => void) \| false \| null \| undefined)[]` | 実行したいイベントハンドラーの配列。`false`, `null`, `undefined` は無視されます。 |

#### 戻り値

すべてのハンドラーを順に実行する1つの関数を返します。

---

### `mergeProps(...propsList)`

複数のpropsオブジェクトをまとめて、Reactに渡せる形にマージします。

#### 引数

| 引数名      | 型                                                                                                                        | 説明                  |
| ----------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `propsList` | `{ ref: Ref \| Ref[]; className: string \| string[]; style: CssProperties \| CssProperties[]; [key: string]: unknown }[]` | マージ対象のprops配列 |

#### 戻り値

以下のルールに従ってマージされたpropsオブジェクトを返します：

- `ref`: [`mergeRef`](#mergerefreflist) でマージ
- `className`: [`mergeClassName`](#mergeclassnameclassnamelist) でマージ
- `style`: [`mergeStyle`](#mergestylestylelist) でマージ
- `on〜`（例: `onClick`）のような関数: [`mergeHandler`](#mergehandlerhandlerlist) でマージ
- それ以外のプロパティ: 後の値が前の値を上書きします

---

## ライセンス

MIT
