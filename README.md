# Clear out node_modules

Find and delete `node_modules` folders (recursively) in your directory.

[![Build Status][github_actions_badge]][github_actions_link]
[![NPM Version][package_version_badge]][package_link]

[package_version_badge]: https://img.shields.io/npm/v/clearout-node-modules.svg
[package_link]: https://www.npmjs.com/package/clearout-node-modules
[github_actions_badge]: https://img.shields.io/github/actions/workflow/status/maafaishal/clearout-node-modules/pr.yml
[github_actions_link]: https://github.com/maafaishal/clear-node-modules/actions?query=workflow%3ACI+branch%3Amain

## CLI

### Run via npx

```bash
npx clearout-node-modules
```

### Install

```bash
npm install --global clearout-node-modules
```

### Usage

```console
$ npx clearout-node-modules
"node_modules" is deleted! ✅
```

CLI also supports a particular path, not only your current directory, so you don't need to change the directory.

```console
$ npx clearout-node-modules src
```

## Options

#### `-r`,`--recursive` flag

When you want to also delete all nested `node_modules` directory, you can run CLI with the `--recursive` flag (or `-r`).

```console
$ npx clearout-node-modules -r
```
