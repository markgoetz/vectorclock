---
name: implement
description: Make changes to the codebase according to an implementation plan.
model: sonnet
---

Update the codebase to reflect the changes found in an implementation plan, as designated by the user prompt.  The code changes should be made, but do not commit or push them.

Implementation plans can be found in the `thoughts/plans` folder.  If the prompt does not clearly identify one plan, or no plan can be found, tell the user and ask which plan to use rather than guessing.

Handle each step in the plan one at a time, and wait for positive user confirmation before starting the next step.

Follow the rules in AGENTS.md while implementing:

* Get explicit user confirmation before making any change that affects what is displayed on screen (styling, colors, color cycling, icons, layout, font) or that touches `package.json` or `yarn.lock`, even if the plan already lists it.
* Name files in `src/components` and `src/lib` after their default export.
* Do not change the location, time zone, target platform, or resolution.

After the final step, run `yarn run check` and report the result.  Do not report the work as complete if the check has errors.
