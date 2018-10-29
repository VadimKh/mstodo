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
* [`mstodo auth [TOKEN]`](#mstodo-auth-file)
* [`mstodo autocomplete [SHELL]`](#mstodo-autocomplete-shell)
* [`mstodo hello [FILE]`](#mstodo-hello-file)
* [`mstodo help [COMMAND]`](#mstodo-help-command)
* [`mstodo plugins`](#mstodo-plugins)
* [`mstodo plugins:install PLUGIN...`](#mstodo-pluginsinstall-plugin)
* [`mstodo plugins:link PLUGIN`](#mstodo-pluginslink-plugin)
* [`mstodo plugins:uninstall PLUGIN...`](#mstodo-pluginsuninstall-plugin)
* [`mstodo plugins:update`](#mstodo-pluginsupdate)

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

## `mstodo auth [TOKEN]`

To get access token:
1. Go to Graph Explorer (https://developer.microsoft.com/en-us/graph/graph-explorer).
2. Login with the account you want to use to run the node samples.
3. Open the F12 dev tools.
4. Type tokenPlease() into the console to get an access token.

```
USAGE
  $ mstodo auth [TOKEN]

OPTIONS
  -h, --help       show CLI help
```

_See code: [src/commands/auth.ts](https://github.com/VadimKh/mstodo/blob/v0.0.0/src/commands/auth.ts)_

## `mstodo autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ mstodo autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ mstodo autocomplete
  $ mstodo autocomplete bash
  $ mstodo autocomplete zsh
  $ mstodo autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.1.0/src/commands/autocomplete/index.ts)_

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

## `mstodo plugins`

list installed plugins

```
USAGE
  $ mstodo plugins

OPTIONS
  --core  show core plugins

EXAMPLE
  $ mstodo plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.2/src/commands/plugins/index.ts)_

## `mstodo plugins:install PLUGIN...`

installs a plugin into the CLI

```
USAGE
  $ mstodo plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  plugin to install

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command 
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in 
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ mstodo plugins:add

EXAMPLES
  $ mstodo plugins:install myplugin 
  $ mstodo plugins:install https://github.com/someuser/someplugin
  $ mstodo plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.2/src/commands/plugins/install.ts)_

## `mstodo plugins:link PLUGIN`

links a plugin into the CLI for development

```
USAGE
  $ mstodo plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello' 
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLE
  $ mstodo plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.2/src/commands/plugins/link.ts)_

## `mstodo plugins:uninstall PLUGIN...`

removes a plugin from the CLI

```
USAGE
  $ mstodo plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

ALIASES
  $ mstodo plugins:unlink
  $ mstodo plugins:remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.2/src/commands/plugins/uninstall.ts)_

## `mstodo plugins:update`

update installed plugins

```
USAGE
  $ mstodo plugins:update

OPTIONS
  -h, --help     show CLI help
  -v, --verbose
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.2/src/commands/plugins/update.ts)_
<!-- commandsstop -->
