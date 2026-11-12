import { describe, expect, it } from 'vitest';
import isIdleTime from './isIdleTime';

// Dates are built with the local-time constructor because isIdleTime reads local hours and minutes.
// The day is a mid-month date with no daylight saving transition.
function at(hour: number, minute = 0): Date {
  return new Date(2026, 10, 12, hour, minute);
}

describe('isIdleTime', () => {
  it('returns false during the midnight hour', () => {
    expect(isIdleTime(at(0, 0))).toBe(false);
    expect(isIdleTime(at(0, 30))).toBe(false);
    expect(isIdleTime(at(0, 59))).toBe(false);
  });

  it('returns true between 1am and 7am', () => {
    expect(isIdleTime(at(1, 0))).toBe(true);
    expect(isIdleTime(at(3, 30))).toBe(true);
    expect(isIdleTime(at(6, 59))).toBe(true);
  });

  it('returns false at 7:00am', () => {
    expect(isIdleTime(at(7, 0))).toBe(false);
  });

  it('returns false at 7:01am', () => {
    expect(isIdleTime(at(7, 1))).toBe(false);
  });

  it('returns false at 7:59am', () => {
    expect(isIdleTime(at(7, 59))).toBe(false);
  });

  it('returns false at 8:00am', () => {
    expect(isIdleTime(at(8, 0))).toBe(false);
  });

  it('returns false between 8am and 11:59pm', () => {
    expect(isIdleTime(at(8, 30))).toBe(false);
    expect(isIdleTime(at(12, 0))).toBe(false);
    expect(isIdleTime(at(18, 45))).toBe(false);
    expect(isIdleTime(at(23, 59))).toBe(false);
  });
});
