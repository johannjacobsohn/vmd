#!/usr/bin/env node

var atom = require('atom-shell')
var proc = require('child_process')
var path = require('path')

var serverPath = path.join(__dirname, 'server.js')

var md = process.argv[2]
if (!md) {
  console.error('No file path specified')
  process.exit(1)
}

// spawn atom-shell
var child = proc.spawn(atom, [serverPath, md])
