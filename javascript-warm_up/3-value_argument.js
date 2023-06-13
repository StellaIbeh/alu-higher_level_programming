#!/usr/bin/node
const arg = process.argv[4];
if (arg !== undefined) {
  console.log(arg);
} else {
  console.log('No argument');
}
