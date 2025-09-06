#!/usr/bin/env node

import { Command } from 'commander'
const program = new Command()

program
  .arguments('<filepath1> <filepath2>') // Define a command with arguments
  .action((filepath1, filepath2) => {
    console.log(`Argument 1: ${filepath1}`);
    console.log(`Argument 2: ${filepath2}`);
  })
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')

program.parse(process.argv);
