mstodo
======

CLI client for MS ToDo

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/mstodo.svg)](https://npmjs.org/package/mstodo)
[![CircleCI](https://circleci.com/gh/VadimKh/mstodo/tree/master.svg?style=shield)](https://circleci.com/gh/VadimKh/mstodo/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/mstodo.svg)](https://npmjs.org/package/mstodo)
[![License](https://img.shields.io/npm/l/mstodo.svg)](https://github.com/VadimKh/mstodo/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mstodo
$ mstodo COMMAND
running command...
$ mstodo (-v|--version|version)
mstodo/0.0.0 darwin-x64 node-v10.5.0
$ mstodo --help [COMMAND]
USAGE
  $ mstodo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mstodo add [FILE]`](#mstodo-add-file)
* [`mstodo hello [FILE]`](#mstodo-hello-file)
* [`mstodo help [COMMAND]`](#mstodo-help-command)

## `mstodo add [FILE]`

describe the command here

```
USAGE
  $ mstodo add [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/add.ts](https://github.com/VadimKh/mstodo/blob/v0.0.0/src/commands/add.ts)_

## `mstodo hello [FILE]`

describe the command here

```
USAGE
  $ mstodo hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ mstodo hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/VadimKh/mstodo/blob/v0.0.0/src/commands/hello.ts)_

## `mstodo help [COMMAND]`

display help for mstodo

```
USAGE
  $ mstodo help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.3/src/commands/help.ts)_
<!-- commandsstop -->
