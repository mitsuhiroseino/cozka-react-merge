import mergeStyle from './mergeStyle';

describe('mergeStyle', () => {
  test('No items', () => {
    const result = mergeStyle();
    expect(result).toEqual({});
  });

  test('Flat', () => {
    const result = mergeStyle(
      { color: '#ffffff' },
      false,
      () => ({ backgroundColor: '#ff0000' }),
      null,
      { color: '#000000' },
      undefined,
    );
    expect(result).toEqual({ color: '#000000', backgroundColor: '#ff0000' });
  });

  test('Nested', () => {
    const result = mergeStyle(
      { color: '#ffffff' },
      false,
      () => ({ backgroundColor: '#ff0000' }),
      [null, { color: '#000000' }, undefined],
    );
    expect(result).toEqual({ color: '#000000', backgroundColor: '#ff0000' });
  });
});
