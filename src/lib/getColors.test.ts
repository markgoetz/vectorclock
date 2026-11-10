import { describe, expect, it } from 'vitest';
import getColors from './getColors';

describe('getColors', () => {
  describe('when idle is true', () => {
    it('returns the dim idle background color with the given hue', () => {
      // @ts-expect-error The backround color variable is not on the native CSS property object
      expect(getColors(true, 12)['--bg-color'] as string).toEqual('oklch(0.1 0.04 12)');
    });
    it('returns the dim idle foreground color with the given hue', () => {
      // @ts-expect-error The backround color variable is not on the native CSS property object
      expect(getColors(true, 12)['--fg-color'] as string).toEqual('oklch(0.62 0.04 12)');
    });
    it('returns only the --bg-color and --fg-color properties', () => {
      const colors = getColors(true, 12);
      expect(colors).toStrictEqual({
        '--bg-color': expect.stringContaining(' '),
        '--fg-color': expect.stringContaining(' '),
      })
    });
  });

  describe('when idle is false', () => {
    it('returns the bright idle background color with the given hue', () => {
      // @ts-expect-error The backround color variable is not on the native CSS property object
      expect(getColors(false, 12)['--bg-color'] as string).toEqual('oklch(0.3027 0.0494 12)');
    });
    it('returns the bright idle foreground color with the given hue', () => {
      // @ts-expect-error The backround color variable is not on the native CSS property object
      expect(getColors(false, 12)['--fg-color'] as string).toEqual('oklch(0.7537 0.1252 12)');
    });
    it('returns only the --bg-color and --fg-color properties', () => {
      const colors = getColors(false, 12);
      expect(colors).toStrictEqual({
        '--bg-color': expect.stringContaining(' '),
        '--fg-color': expect.stringContaining(' '),
      })
    });
  });
});
