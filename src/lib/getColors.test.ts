import { describe, it } from 'vitest';

describe('getColors', () => {
  describe('when idle is true', () => {
    it.todo('returns the dim idle background color with the given hue');
    it.todo('returns the dim idle foreground color with the given hue');
    it.todo('returns only the --bg-color and --fg-color properties');
  });

  describe('when idle is false', () => {
    it.todo('returns the active background color with the given hue');
    it.todo('returns the active foreground color with the given hue');
    it.todo('returns only the --bg-color and --fg-color properties');
  });

  it.todo('returns different colors for idle and active with the same hue');
  it.todo('includes a hue of zero in the color strings');
  it.todo('includes a fractional hue in the color strings unchanged');
});
