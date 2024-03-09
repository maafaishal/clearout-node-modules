#!/usr/bin/env node

import fs from "fs";
import { parseOptions } from "./utils/options";

import cleanupNodeModules from "./index";

function showVersion() {
  const packagePath = new URL("../package.json", import.meta.url);

  const { name, version } = JSON.parse(
    fs.readFileSync(packagePath, { encoding: "utf8", flag: "r" })
  );
  console.log(`${name} ${version}`);
}

function showHelpInformation() {
  console.log(
    `Usage: clearout-node-modules [options] [path...]

Find and delete node_modules folders (recursively) in your directory.

  -h, --help        Display this help
  -r, --recursive   Include all nested node_modules directories
  -v, --version     Display the package version
  `
  );
}

async function cli() {
  const cliArguments = process.argv.slice(2);
  const options = parseOptions(cliArguments);

  if (options.version) {
    return showVersion();
  }

  if (options.help) {
    return showHelpInformation();
  }

  await cleanupNodeModules(options.path, { isRecursive: options.recursive });
}

cli();
