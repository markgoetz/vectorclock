---
name: plan
description: Produce an implementation plan for a large-scale task
model: opus
allowed-tools: Read Grep Glob Write AskUserQuestion
---

Based on the change suggested in the prompt, produce a Markdown file detailing the suggested implementation plan for that change.  Break the plan down into clearly defined, numbered steps.  No changes to the codebase should be made at this point; the plan file is the only file to be written.

Before planning, check `thoughts/research` for research relevant to the change and take it into account.  If none exists or it looks outdated for the task, say so and read the relevant code directly.

Plans must respect the constraints in AGENTS.md:

* The location (Philadelphia), time zone (America/New_York), and target platform and resolution (1280x400) are fixed.
* Files must stay under 200 lines, use spaces rather than tabs, and files in `src/components` and `src/lib` must be named after their default export.
* Mark any step that affects what is displayed on screen (styling, colors, color cycling, icons, layout, font) or that touches `package.json` or `yarn.lock`, since those require user confirmation before they are made.
* The final step must be running `yarn run check` and verifying there are no errors.

Ask the user about any questions or ambiguities that come out of the planning phase before finalizing the plan.

Save the plan to a new file in the `thoughts/plans` folder, creating the folder if needed.  Name the file in the format `kebab-case-topic.md`, where the topic summarizes the prompt.  If a file with that name already exists, ask the user whether to overwrite it or choose a different name.
