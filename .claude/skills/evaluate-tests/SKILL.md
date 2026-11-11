---
name: evaluate-tests
description: Compare a source code file against its current test suite to verify if there are any gaps in coverage
model: opus
allowed-tools: Read Grep Glob Write Edit Bash(git mv:*)
argument-hint: "<file name>"
---

Read a source code file specified in $ARGUMENTS and find all execution paths within the file.  Compare it against the corresponding test file, which will be named the same as $ARGUMENTS but with the extension `.test.ts` instead of `.ts`, or `.test.tsx` instead of `.tsx`.

If $ARGUMENTS is missing, ask the user for a file name.  If the file is not found, try to find a file with a matching name, and confirm it with the user.  If none is found, ask the user to fill in the name of the source code file to be tested.

If the test file for $ARGUMENTS is not found, try to find a file with a matching name in the same folder, and confirm it with the user.  If a file is found with a mismatched extension, for instance if the source code is Component.tsx and the test file is Component.test.ts, offer to rename the test file to match extensions.  If no matching file is found, offer to create the test file, and assume no execution paths are covered.  

Identify all execution paths in the source code file that would not be covered in the test suite.  Look at the description of the test case only.  Test cases may be listed as `it.todo` and have no body yet, in which case the execution path should be considered to be covered.

Execution paths include:
* if/elseif/else statements
* ternary operations
* switch statements
* optional chaining
* default values through ?? and ||
* early returns
* exceptions and try/catch blocks
* conditional rendering for components
* Prop variations for components that change what the component renders

Print the missing execution paths out to the terminal in a Markdown table.  The columns of the table should be:
1. The number of the missing execution path, starting with 1 and incrementing with each suggestion.
2. The line numbers of the branch or statement in the source code file that is not covered.
3. One line of text describing what the missing branch does, such as "API error handling"
4. A proposed name for the `it.todo` stub, such as "renders an error if the API fails"

Offer to add the missing test suites to the file, whether it already existed or not.  If the user confirms, add the test suites to the test file as `it.todo` blocks with no function body, as the bodies will be filled in on a later task.  If there are two or more new test suites that rely on the same precondition (such as being logged in), they should be wrapped in a `describe` block.  If `describe` or `it` is not imported in the test file, import them from `vitest`.

When adding tests, follow these rules for the names of the `describe` and `it.todo` blocks:
* The top-level `describe` block should be the same as the function, class, or component being tested.
* Additional `describe` blocks should be named after their precondition, such as `when the user is logged in`.
* `it.todo` test cases should be named after the scenario they are testing, such as `renders a login prompt`.

The 200-line limit can be overridden for test files.

After making changes to the test file, note that the user should run `yarn run check` to verify that the test file still passes.
