#!/usr/bin/env node

const pathString = process.env.PATH;
const list = pathString.split(":");
console.log(list.join("\n"));
