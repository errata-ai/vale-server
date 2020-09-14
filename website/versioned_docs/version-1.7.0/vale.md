---
id: version-1.7.0-vale
title: Command Line
original_id: vale
---

:::note
Our docs have an official new home at https://docs.errata.ai/vale-server/install.
:::

Vale Server is built on top of [Vale](https://github.com/errata-ai/vale), a powerful command-line interface. You can install and use Vale on its own by following the instructions at [its repository](https://github.com/errata-ai/vale#installation).

See [The Vale Workflow](https://medium.com/@jdkato/the-vale-workflow-3b709fa39212) to learn more about the relationship between Vale and Vale Server.

## Core CLI options

Vale support a number of optional arguments, as described below.

```console
NAME:
   vale - A command-line linter for prose.

USAGE:
   vale [global options] command [command options] [arguments...]

VERSION:
   v1.7.1

COMMANDS:
     ls-config, dc  List the current configuration options
     new-rule       Generates a template for the given extension point
     help, h        Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --glob value           a glob pattern (e.g., --glob='*.{md,txt}') (default: "*")
   --config value         a file path (e.g., --config='some/file/path/.vale.ini')
   --minAlertLevel value  The lowest alert level to display
   --output value         output style ("line" or "JSON") (default: "CLI")
   --ext value            extension to associate with stdin (default: ".txt")
   --no-wrap              don't wrap CLI output
   --no-exit              don't return a nonzero exit code on lint errors
   --sort                 sort files by their name in output
   --debug                print debugging information to stdout
   --normalize            replace each path separator with a slash ('/')
   --ignore-syntax        lint all files line-by-line
   --relative             return relative paths
   --help, -h             show help
   --version, -v          print the version
```
