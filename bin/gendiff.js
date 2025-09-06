#!/usr/bin/env node

import { Command } from 'commander'
import readFiles from "../src/readFiles.js";
const program = new Command()

program
  .arguments('[filepath1] [filepath2]') // Define a command with arguments
  .action((filepath1, filepath2) => {
    readFiles(filepath1);
    readFiles(filepath2);

    console.log(`File path 1: ${filepath1}`);
    console.log(`File path 2: ${filepath2}`);
  })
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')

program.parse(process.argv);
