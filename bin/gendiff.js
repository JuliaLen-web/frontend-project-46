#!/usr/bin/env node

import { Command } from 'commander'
import diff from "../src/index.js";
const program = new Command()

program
  .arguments('<filepath1> <filepath2>') // Define a command with arguments
  .action((filepath1, filepath2) => {
    diff(filepath1, filepath2, program.opts().format)
    console.log(diff(filepath1, filepath2, program.opts().format))
  })
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version ', 'output the version number')
  .option('-f, --format [type]', 'output format', 'stylish')

program.parse();
