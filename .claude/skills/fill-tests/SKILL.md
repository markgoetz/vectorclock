---
name: fill-tests
description: Fill in `it.todo` stubs in a test file with real test bodies that match the intended behavior described by each stub's name. Use whenever the user asks to implement, write, flesh out, or complete the todo tests for a file, even if they don't say `it.todo`.
model: sonnet
allowed-tools: Read Grep Glob Write Edit Bash(yarn test:*) Bash(yarn run check:*)
argument-hint: "<test file or source file name>"
---

Turn the `it.todo` stubs in a test file into real tests.  The stub names are the specification: each one says what the code *should* do.  Your job is to write a test that checks that, not to write a test that merely passes.

## Finding the files

$ARGUMENTS may be the test file (`foo.test.ts`) or the source file (`foo.ts`).  Resolve the other one: the test file shares the source file's name with `.test` before the extension.  If $ARGUMENTS is missing or nothing matches, ask the user for a file name rather than guessing.  If the test file has no `it.todo` stubs, say so and stop.

Read the source file, the test file, and any existing implemented tests in the same file or in sibling `*.test.ts(x)` files.  Match their style: imports, helper usage, how they build inputs, and how they handle awkward typings.

## Writing each test

1. Read the stub name and its surrounding `describe` blocks to work out the scenario and the expected result.
2. Read the source to find the inputs that trigger that scenario.  Prefer boundary values when the name mentions one (e.g. a stub about 7:01am should use exactly 7:01am).
3. Replace `it.todo('name')` with `it('name', () => { ... })`.  Keep the name exactly as written unless it is plainly wrong; renaming specs without asking hides the discrepancy you are about to report.
4. Keep stub order and `describe` structure.  Put shared setup in `beforeEach` only when two or more tests need it.
5. Import anything new (`expect`, `vi`, `beforeEach`, testing-library helpers) from the right package.  Components use `@testing-library/react`.

Some behavior depends on the environment.  For time-based code, build dates in a way that is correct regardless of the machine's time zone, or use `vi.useFakeTimers` / `vi.setSystemTime`, and restore real timers afterward.  The app is fixed to America/New_York, so tests must not pass or fail depending on where they run.

## When a stub disagrees with the source

The point of this skill is to verify *intended* behavior, so a stub that contradicts the code is a finding, not something to paper over.  Before editing, compare each stub's expectation against what the source actually does.  If they conflict (a stub says 7:00am returns false and the code returns true), do not silently write the test to match the code, and do not write a failing test without saying so.  List the conflicts to the user and ask which side is right: rename the stub to match the code, or treat the code as buggy.  Fill in the stubs that agree in the meantime, and leave conflicting ones as `it.todo` until answered.

If the user decides the code is wrong, write the test to the intended behavior and tell them it will fail until the source is fixed.  Fixing logic is allowed without confirmation per AGENTS.md, but anything that changes what is displayed, or `package.json`/`yarn.lock`, needs the user's go-ahead first.

## Constraints from AGENTS.md

* Spaces, not tabs.  Test files may exceed 200 lines.
* Do not change the Philadelphia location, the America/New_York time zone, or the 1280x400 target.
* Do not add packages.  Use what is already installed (vitest, testing-library).

## Verifying

Run `yarn test` and report real results: how many tests pass, and which fail with the output.  Then run `yarn run check` and verify it has no errors before telling the user the work is done.  If something fails, diagnose whether the test or the source is wrong, fix a test bug, and report a source bug instead of weakening the assertion.

## Report

End with a short summary: the number of stubs filled, the number left as `it.todo` and why, any conflicts found, and the test/check results.
