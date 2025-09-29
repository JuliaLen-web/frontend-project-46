#!/usr/bin/env node

import { Command } from 'commander'
import diff from "../src/diff.js";
import parsers from "../src/parsers.js";
const program = new Command()

program
  .arguments('[filepath1] [filepath2]') // Define a command with arguments
  .action((filepath1, filepath2) => {
    const file1 = parsers(filepath1);
    const file2 = parsers(filepath2);
    diff(file1, file2);
  })
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')

program.parse(process.argv);
