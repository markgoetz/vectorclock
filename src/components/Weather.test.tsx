import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Weather from "./Weather";

afterEach(cleanup);

function renderWeather(props: Partial<Parameters<typeof Weather>[0]> = {}) {
  return render(
    <Weather
      temperature={70}
      code={1}
      isDay={1}
      minTemp={60}
      maxTemp={80}
      {...props}
    />,
  );
}

describe("Weather", () => {
  it("renders a daytime weather icon SVG with the title matching the weather code when it is day", () => {
    renderWeather({ code: 1, isDay: 1 });
    expect(screen.getByTitle("day1")).toBeTruthy();
    expect(screen.queryByTitle("night1")).toBeNull();
  });

  it("renders a nighttime weather icon SVG with the title matching the weather code when it is night", () => {
    renderWeather({ code: 2, isDay: 0 });
    expect(screen.getByTitle("night2")).toBeTruthy();
    expect(screen.queryByTitle("day2")).toBeNull();
  });

  describe("when rendering the current temperature", () => {
    it("renders the current temperature with a degree symbol", () => {
      renderWeather({ temperature: 72 });
      expect(screen.getByText("72°")).toBeTruthy();
    });
    it("rounds the current temperature to a whole number", () => {
      renderWeather({ temperature: 71.6 });
      expect(screen.getByText("72°")).toBeTruthy();
    });
    it("renders a negative current temperature", () => {
      renderWeather({ temperature: -5 });
      expect(screen.getByText("-5°")).toBeTruthy();
    });
  });

  describe("when rendering the temperature range", () => {
    it("renders the min and max temperatures as a range", () => {
      renderWeather({ minTemp: 60, maxTemp: 80 });
      expect(screen.getByText("60°-80°")).toBeTruthy();
    });
    it("rounds the min and max temperatures to whole numbers", () => {
      renderWeather({ minTemp: 60.4, maxTemp: 79.6 });
      expect(screen.getByText("60°-80°")).toBeTruthy();
    });
    it("renders the range when the min and max temperatures are negative", () => {
      renderWeather({ minTemp: -5, maxTemp: -3 });
      expect(screen.getByText("-5°--3°")).toBeTruthy();
    });
  });
});
