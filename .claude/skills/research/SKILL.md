---
name: research
description: Research the codebase and intake it into context for future use.
model: sonnet
allowed-tools: Read Grep Glob Write
---

Research the repository to answer the questions posed by the prompt.  This is purely for setup; no action should be planned or taken as a result of this command, and no files other than the research file may be changed.

Save the research to a new file in the `thoughts/research` folder, creating the folder if needed.  Name the file in the format `kebab-case-topic.md`, where the topic summarizes the prompt.  If a file with that name already exists, ask the user whether to overwrite it or choose a different name.

After saving, summarize the key findings in the conversation so they remain in context.
