# AGENTS.md

## Purpose

This repo is a web application that displays the current time and weather.  The weather is pulled from the OpenMeteo API.  It's localized to the America/New_York timezone and a location in Philadelphia, and runs on a Raspberry Pi at a resolution of 400 height and 1280 width.

## Tech Stack

The application runs on React with TypeScript, and uses CSS Modules for component-scoped styling (one `.module.css` file per component).  Global styles live in `src/app.css`.  No additional CSS methodology is used.

Vite is used for building the application.

SVG icons are rendered by a single `WeatherIcon` component, which loads them from `src/assets/icons` using the `vite-plugin-svgr` package, as configured in Vite.

## Layout

* `public` contains all assets that must be readable directly from the browser.  At present, the only assets are the font file and favicon.
* `thoughts` is gitignored, local-only working material: research notes (`thoughts/research`) and implementation plans (`thoughts/plans`) produced by the `/research` and `/plan` skills.
* `sourceassets` represents the source files used to help build graphics assets.  These should never be touched.
* `src` represents the source code and source assets that are built into the application.  This includes components, styling, and visual assets.
  * `src/assets` contains assets to be added to the application, such as SVG files.
  * `src/components` contains visual components (`.tsx`) and their CSS Modules (`.module.css`).
  * `src/lib` contains API services; in this case, the connection to OpenMeteo.

## Commands

The commands can be found in `package.json`.  

* `yarn dev` runs the server in development mode.
* `yarn build` builds the production version of the application.
* `yarn preview` runs the production application locally.
* `yarn run check` runs ESLint (including `jsx-a11y` accessibility rules) and TypeScript typechecking.

The production application is hosted and deployed on Netlify.  The Raspberry Pi is a display client that shows the application in a Chromium browser.

## Workflow

Prompt the user and wait for positive confirmation when updating any of these:

* Anything that affects what is displayed on screen.  This includes the styling, colors, color cycling logic, icons, layout, or font.
* package.json or yarn.lock.  This includes installing new packages.

Any of these changes can be made without confirmation:

* Changes to pure logic that impact the weather icons, clock functionality, and the connection to OpenMeteo.
* The component hierarchy
* The flow of data throughout the application, including where in the component hierarchy the data is stored.

Do not change the location in Philadelphia, time zone, or target platform or resolution.

`yarn run check` must be run and the output verified to have no errors before committing.

## Code best practices

Moving forward, code should be formatted with spaces rather than tabs.  This ensures that alignment is kept regardless of your tab setup.

Files must be kept under 200 lines long.

Files within `src/components` and `src/lib` must be named after their default export.
