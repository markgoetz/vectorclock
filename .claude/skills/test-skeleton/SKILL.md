---
name: test-skeleton
description: Create the list of test cases for a file.
model: sonnet
allowed-tools: Read Grep Glob Write Edit Bash
argument-hint: "<file name>"
---

Read a file specified in $ARGUMENTS, and create the `describe` and `it` functions to test it.  This should enumerate test cases based on the logic provided in the file, and ignore issues that will be caught by TypeScript or linting.  If $ARGUMENTS is missing or the file cannot be found, ask the user to re-specify which file they want to test.  If a file with a similar name can be found, suggest that file.

For example, if asked to build test cases for a function that returns whether a number is even, the test cases may include:

* An even number is passed
* An odd number is passed
* Zero is passed
* A negative number is passed
* A fractional number is passed

The `it` function descriptions should be of the format "returns true when an even number is passed" or "renders the user's name".  This reads better when combined with the `describe` statement.

The top-level `describe` function should be named after the function it is testing.  Any lower-level `describe` functions should mention the overriding case that is being tested - something like "when the user is logged in".

If there are three or more tests that require the same precondition (for instance, being logged in), they should be grouped under a `describe` function.

The corresponding `.test.ts` or `.test.tsx` files should be created, or edited if they already exist.  The test files should live in the same folder.  The `describe` and `it` functions should be imported from `vitest`.  Tests should be implemented as `it.todo`.

If a corresponding `.test.ts` or `.test.tsx` file exists, edit it.  Do not change any other tests, or add tests that are redundant.

If need be, the 200-line limit can be bypassed for test files.

After updating the test file, run `yarn run check` to ensure it passes.  If `yarn run check` returns errors, attempt to fix the errors, and prompt the user if they cannot be fixed.

Give the user a summary of files that were created or edited.
