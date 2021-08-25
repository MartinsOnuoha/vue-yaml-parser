import { truncate } from '../helpers';

describe('functions', () => {
  test('truncate: truncates text by specified value', () => {
    const text = 'Hello there, how are you?';
    const truncated = truncate(text, 11);
    expect(truncated.length).toBeLessThan(text.length);
    expect(truncated).toContain('...');
  });
});
