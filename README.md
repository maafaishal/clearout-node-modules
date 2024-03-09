# Clean Up node_modules

[![Build Status][github_actions_badge]][github_actions_link]
[![NPM Version][package_version_badge]][package_link]

[package_version_badge]: https://img.shields.io/npm/v/clear-node-modules.svg
[package_link]: https://www.npmjs.com/package/clear-node-modules
[github_actions_badge]: https://img.shields.io/github/actions/workflow/status/keithamus/clear-node-modules/pr.yml
[github_actions_link]: https://github.com/keithamus/clear-node-modules/actions?query=workflow%3ACI+branch%3Amain

Find and delete `node_modules` folders (recursively) in your directory.

## CLI

### Run via npx

```bash
npx clear-node-modules
```

### Install

```bash
npm install --global clear-node-modules
```

### Usage

```console
$ npx clear-node-modules
"node_modules" is deleted! ✅
```

CLI also supports a particular path, not only your current directory, so you don't need to change the directory.

```console
$ npx clear-node-modules src
```

## Options

#### `-r`,`--recursive` flag

When you want to also delete all nested `node_modules` directory, you can run CLI with the `--recursive` flag (or `-r`).

```console
$ npx clear-node-modules -r
```
