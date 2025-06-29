import isPlainObject from 'lodash-es/isPlainObject';
import mergeObject from './mergeObject';

describe('mergeObject', () => {
  test('No items', () => {
    const result = mergeObject<any, any>(
      [],
      [
        {
          strategy: (current: any, value: any) => {
            return Object.assign(current, value);
          },
        },
      ],
    );
    expect(result).toEqual({});
  });

  test('object', () => {
    const result = mergeObject<any, any>(
      [{ a: 1, b: 2, c: 3 }, ['a'], { b: 12 }, null, { a: 21, d: 24 }],
      [
        {
          strategy: (current: any, value: any) => {
            return value;
          },
        },
      ],
    );
    expect(result).toEqual({ a: 21, b: 12, c: 3, d: 24 });
  });

  test('condition', () => {
    const result = mergeObject<any, any>(
      [
        { a: 1, b: 2, c: 3 },
        ['a'],
        { a: 11, b: 12, c: 13, d: 14 },
        null,
        { a: 21, b: 22, c: 23 },
      ],
      [
        {
          condition: 'a',
          strategy: (current: any, value: any) => {
            if (current == undefined || current < value) {
              return value;
            }
          },
        },
        {
          condition: /^b$/,
          strategy: (current: any, value: any) => {
            if (current == undefined || current > value) {
              return value;
            }
          },
        },
        {
          condition: (key: PropertyKey, value: unknown) => key === 'c',
          strategy: (current: any, value: any) => {
            if (current == undefined) {
              return value;
            } else {
              return current + value;
            }
          },
        },
        {
          strategy: (current: any, value: any) => {
            return value;
          },
        },
      ],
    );
    expect(result).toEqual({ a: 21, b: 2, c: 39, d: 14 });
  });
});
