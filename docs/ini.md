---
id: ini
title: Configuration
---

:::note
Our docs have an official new home at https://docs.errata.ai/vale-server/concepts/config.
:::

## Overview

Vale Server's primary source of configuration is through [INI][p1] files. Each
of your [Projects](ui#projects) will have an associated configuration file.

The following example shows the basic structure of these files:

```ini
# Example Vale Server config file.

# Core settings

# The minimum alert level to display (suggestion, warning, or error).
#
# CI builds will only fail on error-level alerts.
MinAlertLevel = warning

# The "formats" section allows you to associate an "unknown" format
# with one of Vale Server's supported formats.
[formats]
mdx = md

# Global settings (applied to every syntax)
[*]
# List of styles to load
BasedOnStyles = write-good, Joblint
# Style.Rule = {YES, NO} to enable or disable a specific rule
vale.Editorializing = YES
# You can also change the level associated with a rule
vale.Hedging = error

# Syntax-specific settings
#
# These overwrite any conflicting global settings
[*.{md,txt}]
vale.Editorializing = NO
```

## Available Options

```ini
MinAlertLevel = suggestion
```

`MinAlertLevel` (core) specifies the minimum alert severity that Vale will report. The
options are "suggestion," "warning," or "error" (defaults to "suggestion").

---

```ini
# By default, `code` and `tt` are ignored.
IgnoredScopes = code, tt
```

`IgnoredScopes` (core) specifies inline-level HTML tags to ignore. In other words,
these tags may occur in an active scope (see `SkippedScopes`) but their content
still won't raise any alerts.

---

```ini
# By default, `script`, `style`, `pre`, and `figure` are ignored.
SkippedScopes = script, style, pre, figure
```

`SkippedScopes` (core) specifies block-level HTML tags to ignore. Any content in these
scopes will be ignored.

---

```ini
WordTemplate = `\b(?:%s)\b`
```

`WordTemplate` (core) specifies what Vale will consider to be an individual word.

---

```ini
BasedOnStyles = Joblint, write-good
```

`BasedOnStyles` (syntax-specific) specifies [styles](/vale/styles) that should
have all their rules enabled.

---

```ini
BlockIgnores = (?s) *({< file [^>]* >}.*?{</ ?file >})
```

`BlockIgnores` (syntax-specific) allow you to exclude certain block-level
sections of text that don't have an associated HTML tag that could be used with
`SkippedScopes`. See [Non-Standard Markup](formats) for more information.

---

```ini
TokenIgnores = (\$+[^\n$]+\$+)
```

`TokenIgnores` (syntax-specific) allow you to exclude certain inline-level
sections of text that don't have an associated HTML tag that could be used with
`IgnoredScopes`. See [Non-Standard Markup](formats) for more information.

## In-Text Configuration

In addition to you Project-specific configuration files, you can also
selectively enable or disable Vale Server from within your Markdown, HTML, or
reStructuredText documents.

:::warning Heads up!
Vale currently doesn't support in-text configuration in AsciiDoc documents.
:::

Markdown and HTML use HTML-style comments:

```html
<!-- vale off -->

This is some text

more text here...

<!-- vale on -->

<!-- vale Style.Rule = NO -->

This is some text

<!-- vale Style.Rule = YES -->
```

reStructuredText uses its own comment syntax:

```rst
.. vale off

This is some text

.. vale on
```

Vale Server also ignores specific tags for each supported
[markup language](format).

## Syncing

Vale Server's underlying configuration files are portable across all of its supported platforms. The platform-specific location of these files is given in the table below.

|                         macOS                         |                      Windows                      |
|:-----------------------------------------------------:|:-------------------------------------------------:|
| `~/Library/Application Support/errata-ai/Vale Server` | `C:/Users/<USER>/AppData/Roaming/errata-ai/Vale Server` |

[p1]: https://en.wikipedia.org/wiki/INI_file
