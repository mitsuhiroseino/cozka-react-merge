# @cozka/react-merge

`@cozka/react-merge` is a utility package that provides simple functions for merging React component props.
It’s especially useful when you want to combine multiple `ref`s, `className`s, `style`s, or event handlers cleanly.

**[日本語のREADMEはこちら](./README.ja.md)**

---

## Installation

```sh
npm install @cozka/react-merge
```

---

## Usage

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

With `mergeProps`, you can easily combine multiple sets of props into a single, clean object.

---

## API

### `mergeRef(...refList)`

Combines multiple `ref`s into a single function ref.

#### Parameters

| Name      | Type                                    | Description                                                         |
| --------- | --------------------------------------- | ------------------------------------------------------------------- |
| `refList` | `(Ref \| false \| null \| undefined)[]` | An array of refs. `false`, `null`, and `undefined` will be ignored. |

#### Returns

A function that assigns the value to all provided refs.

---

### `mergeClassName(...classNameList)`

Concatenates multiple `className` strings with spaces.

#### Parameters

| Name            | Type                                       | Description                                                                |
| --------------- | ------------------------------------------ | -------------------------------------------------------------------------- |
| `classNameList` | `(string \| false \| null \| undefined)[]` | An array of class names. `false`, `null`, and `undefined` will be ignored. |

#### Returns

A single string combining all valid class names with spaces.

---

### `mergeStyle(...styleList)`

Merges multiple `style` objects into one.

#### Parameters

| Name        | Type                                              | Description                                                              |
| ----------- | ------------------------------------------------- | ------------------------------------------------------------------------ |
| `styleList` | `(CSSProperties \| false \| null \| undefined)[]` | An array of style objects. `false`, `null`, and `undefined` are ignored. |

#### Returns

A single style object. Later styles override earlier ones in case of overlap.

---

### `mergeHandler(...handlerList)`

Creates a single function that calls multiple event handlers in sequence.

#### Parameters

| Name          | Type                                                           | Description                                                                   |
| ------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `handlerList` | `(((...args: any[]) => void) \| false \| null \| undefined)[]` | An array of event handlers. `false`, `null`, and `undefined` will be ignored. |

#### Returns

A function that calls all valid handlers in order.

---

### `mergeProps(...propsList)`

Combines multiple props objects into a single one that can be passed to a React element.

#### Parameters

| Name        | Type                                                                                                                      | Description            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `propsList` | `{ ref: Ref \| Ref[]; className: string \| string[]; style: CSSProperties \| CSSProperties[]; [key: string]: unknown }[]` | Array of props objects |

#### Returns

A single merged props object based on the following rules:

- `ref`: merged using [`mergeRef`](#mergerefreflist)
- `className`: merged using [`mergeClassName`](#mergeclassnameclassnamelist)
- `style`: merged using [`mergeStyle`](#mergestylestylelist)
- Properties matching `/^on[A-Z].*/` (e.g., `onClick`): merged using [`mergeHandler`](#mergehandlerhandlerlist)
- Other keys: later values overwrite earlier ones

---

## License

MIT
