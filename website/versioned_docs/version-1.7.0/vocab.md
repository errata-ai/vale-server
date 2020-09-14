---
id: version-1.7.0-vocab
title: Vocab
original_id: vocab
---

:::note
Our docs have an official new home at https://docs.errata.ai/vale-server/install.
:::

`Vocab` directories solve a common style
inheritance problem. Consider, for example, the following scenario:

> You're working for an organization that adheres to the
> [Microsoft Writing Style Guide](https://github.com/errata-ai/Microsoft), so
> you've installed the style and added it to your configuration file.
>
> Over time, you add your own organization's terminology to various rules and
> exception lists (e.g.,
> [Acronyms.yml](https://github.com/errata-ai/Microsoft/blob/master/Microsoft/Acronyms.yml)
> and
> [Headings.yml](https://github.com/errata-ai/Microsoft/blob/master/Microsoft/Headings.yml)).
>
> A few weeks later, a new version of the style is released with a few bug fixes and
> enhancements. What do you do now? You either have to overwrite your changes altogether
> or slowly migrate each customized rule individually.

Vocabularies make this process *much* easier. Each `Vocab` is a single folder
(stored at `<StylesPath>/Vocab/<name>/`) that consists of two text
files&mdash;`accept.txt` and `reject.txt`&mdash;that contain one word or phrase
per line.

* All entries in `accept.txt` are automatically added to a case-insensitive
  substitution rule (`Vale.Terms`), ensuring that any occurrences of these
  words or phrases exactly match their corresponding entry in `accept.txt`.

  Each term is automatically added to every exception list in all inherited
  styles&mdash;meaning that you now only need to update your project's
  *vocabulary* to customize third-party styles (rather than the styles
  themselves).

* Entries in `reject.txt` are automatically added to an existence rule
  (`Vocab.Avoid`) that will flag all occurrences as errors.

This also means that your exceptions can be developed independent of a style,
allowing you to use the same exceptions with multiple styles or switch styles
without having to re-implement them:

```ini
StylesPath = "..."

# Here's were we define the exceptions to use in *all*
# `BasedOnStyles`.
Vocab = Some-Name

MinAlertLevel = suggestion

[*]
# Automatically respects all custom exceptions
BasedOnStyles = Microsoft
```

You can create and manage your vocabularies through the [dashboard](ui#dashbaord).

## Directory Structure

`Vocab` entries are stored in `<StylesPath>/Vocab/<name>/` and are then
referenced by `<name>` in `.vale.ini`. For example, consider the following
directory structure:

```bash
$ tree styles
├───Microsoft
├───Vocab
│   ├───Blog
│   └───Marketing
└───write-good
```

Here, our `StylesPath` (`/styles`) contains two styles (`Microsoft` and
`write-good`) and two vocabularies (`Blog` and `Marketing`). You can then
simply reference these entries by their directory name:

```ini title=".vale.ini"
StylesPath = styles

Vocab = Blog

[*.md]
BasedOnStyles = write-good
```

## File Format

Both `accept.txt` and `reject.txt` are simple, plain-text files that take one
entry per line:

```text
first
[pP]y.*\b
third
```

The entries are case-sensitive and may also be regular expressions.
