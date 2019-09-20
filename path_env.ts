#!/usr/bin/env deno --allow-all

const values = Deno.env();
const pathString = values.PATH;
const list = pathString.split(':');
console.log(list.join('\n'));
