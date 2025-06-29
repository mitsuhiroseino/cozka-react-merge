import mergeClassName from './mergeClassName';

describe('mergeClassName', () => {
  test('No items', () => {
    const result = mergeClassName();
    expect(result).toBe('');
  });

  test('Flat', () => {
    const result = mergeClassName('a', false, 'b', null, 'c', undefined);
    expect(result).toBe('a b c');
  });

  test('Nested', () => {
    const result = mergeClassName('a', false, 'b', [null, 'c', undefined]);
    expect(result).toBe('a b c');
  });
});
