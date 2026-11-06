# Vectorclock

A web application that displays the current time and weather.  Weather data comes from the [Open-Meteo](https://open-meteo.com/) API, and the app is localized to the America/New_York time zone with a fixed location in Philadelphia.

It is designed to run in a browser (Chromium) on a Raspberry Pi acting as a dedicated display, at a fixed resolution of 1280 pixels wide by 400 pixels tall.  The production build is hosted on Netlify, and the Raspberry Pi simply loads it.

Built with React, TypeScript, and Vite.

## Commands

* `yarn dev` runs the development server.
* `yarn build` builds the production version.
* `yarn preview` runs the production build locally.
* `yarn run check` runs ESLint and TypeScript typechecking; it also runs automatically on commit.
