# CLAUDE.md

## What this repo is

An [Awesome List](https://github.com/sindresorhus/awesome) of Visual Studio Code
extensions and resources. **`README.md` is the product** — there is no source
code, no build step, and no app to run. Edits almost always mean editing
`README.md`.

## Adding an entry

Use this exact format (see `CONTRIBUTING.md`):

```gfm
#### [Title of the package](https://marketplace.visualstudio.com/items?itemName=NAME)
> A short description of what this package does and why it is awesome.

![title of the package](link to a .gif demonstrating functionality)
```

Rules:
- **Link to the VS Code Marketplace** (`marketplace.visualstudio.com`), not the
  GitHub repo.
- Place the entry in the most fitting section; if none fits, use
  `uncategorized`.
- Keep entries in **alphabetical order** within their section.
- Include a `.gif`/screenshot demonstrating functionality when possible.

## Table of Contents

The ToC at the top of `README.md` is maintained **by hand** and must be updated
when sections are added, removed, or renamed. Anchors are GitHub-slugified
(lowercase, spaces → `-`, most punctuation stripped; duplicates get a `-1`
suffix).

## Themes

- Prefer a [vscodethemes](https://vscodethemes.com) link, else the Marketplace.
- Alphabetical order; **one theme per publisher**.
- Include a similar-style screenshot (template assets under `themes/`).

## Linting / CI

- **markdownlint** config is `.markdownlint.json`. Several rules are disabled on
  purpose (HTML allowed, line-length off, duplicate headings allowed, etc.) —
  don't "fix" these by reformatting.
- **CI (`.travis.yml`)** runs `awesome_bot README.md` to check that all links
  resolve. Adding a dead or wrong link will fail the build. A whitelist of
  known-flaky domains lives in `.travis.yml`.

## Conventions for changes

- This is a PR-driven community repo: keep diffs minimal and scoped to the
  entry/section being changed.
- Match the surrounding markdown style exactly (heading levels, `>` blockquote
  descriptions, spacing).
- Do not commit unless explicitly asked.
