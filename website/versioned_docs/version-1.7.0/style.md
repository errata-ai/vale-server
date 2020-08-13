---
id: version-1.7.0-style
title: Styles 101
original_id: style
---

:::tip Have a style you'd like to see implemented?
Let us know! We're actively looking to expand our library of [pre-made, open-source styles](https://github.com/errata-ai/styles/issues/new).
:::

## Overview

Vale Server has a powerful extension system that doesn't require knowledge of
any programming languages. Instead, it exposes its functionality through simple
[YAML](http://yaml.org) files.

:::note Heads up!
Vale Server expects its external rules to have an extension of `.yml` (not `.yaml`).
:::

The core component of Vale's extension system are collections of writing
guidelines called *styles*. These guidelines are expressed through *rules*,
which are YAML files enforcing a particular writing construct&mdash;for example,
ensuring a certain readability level, sentence length, or heading style.

Styles are organized in a hierarchical folder structure, as shown below.

```text
styles/
├── base/
│   ├── ComplexWords.yml
│   ├── SentenceLength.yml
│   ...
├── blog/
│   ├── TechTerms.yml
│   ...
└── docs/
    ├── Branding.yml
    ...
```

Where *base*, *blog*, and *docs* would be your styles. This extensibility allows you to use Vale Server to enforce your own custom guidelines.

## Pre-made styles

### `Vale` (built-in)

Vale Server comes with a built-in style named `Vale` that implements four rules, as described in the table below.

| Rule              | Scope  | Level   | Description                                                         |
|-------------------|--------|---------|---------------------------------------------------------------------|
| `Vale.Spelling`   | `text` | `error` | Spell checks text while respecting the active project's vocabulary. |
| `Vale.Repetition` | `text` | `error` | Looks for instances of repeated words such as "the the" or "this this."            |
| `Vale.Terms`      | `text` | `error` | Enforces the current project's `Preferred` [vocabulary terms](ui#vocabularies).                    |
| `Vale.Avoid`      | `text` | `error` | Enforces the current project's `Do not use` [vocabulary terms](ui#vocabularies).                    |

### Third-party styles

There are a number of third-party styles that be installed through the [Dashboard](ui#Dashboard). These currently include the following options:

- [The Google Developer Documentation Style Guide](https://developers.google.com/style/);
- [The Microsoft Writing Style Guide](https://docs.microsoft.com/en-us/style-guide/welcome/);
- [`proselint`](https://github.com/amperser/proselint/blob/master/README.md);
- [`write-good`](https://github.com/btford/write-good/blob/master/README.md); and
- [`Joblint`](https://github.com/rowanmanning/joblint/blob/master/README.md).

## Creating your own styles

The building blocks behind Vale's styles are rules, which utilize extension
points to perform specific tasks.

The basic structure of a rule consists of a small header (shown below) followed
by check-specific arguments (discussed below).

```yaml
# All rules should define the following header keys:
#
# `extends` indicates the extension point being used (see below for information
# on the possible values).
extends: existence
# `message` is shown to the user when the rule is broken.
#
# Many extension points accept format specifiers (%s), which are replaced by
# extracted values. See the exention-specific sections below for more details.
message: "Consider removing '%s'"
# `level` assigns the rule's severity.
#
# The accepted values are suggestion, warning, and error.
level: warning
# `scope` specifies where this rule should apply -- e.g., headings, sentences, etc.
#
# See the Markup section for more information on scoping.
scope: heading
# `code` determines whether or not the content of code spans -- e.g., `foo` for
# Markdown -- is ignored.
code: false
# `link` gives the source for this rule.
link: 'https://errata.ai/'
# The number of times this rule should raise an alert.
#
# By default, there is no limit.
limit: 1
```

## Checks

`checks` offer a high-level way to extend Vale. They perform operations such as checking for consistency, counting occurrences, and suggesting changes.

:::note Heads up!
Vale uses Go's [`regexp` package](https://golang.org/pkg/regexp/syntax/) to evaluate all patterns in rule definitions. This means that lookarounds and backreferences aren't supported.
:::

<!-- vale 18F.Clarity = NO -->

### `existence`

**Example Definition:**

```yaml
extends: existence
message: Consider removing '%s'
level: warning
code: false
ignorecase: true
tokens:
    - appears to be
    - arguably
```

**Key Summary:**

|     NAME     |  TYPE   |                          DESCRIPTION                           |
|--------------|---------|----------------------------------------------------------------|
| `append`     | `bool`  | Adds `raw` to the end of `tokens`, assuming both are defined.  |
| `ignorecase` | `bool`  | Makes all matches case-insensitive.                            |
| `nonword`    | `bool`  | Removes the default word boundaries (`\b`).                    |
| `raw`        | `array` | A list of tokens to be concatenated into a pattern.            |
| `tokens`     | `array` | A list of tokens to be transformed into a non-capturing group. |

The most general extension point is `existence`. As its name implies, it looks
for the "existence" of particular tokens.

These tokens can be anything from simple phrases (as in the above example) to complex regular expressions&mdash;for example, [the number of spaces between sentences](https://github.com/testthedocs/vale-styles/blob/master/18F/Spacing.yml) and [the position of punctuation after quotes](https://github.com/testthedocs/vale-styles/blob/master/18F/Quotes.yml).

You may define the tokens as elements of lists named either `tokens`
(shown above) or `raw`. The former converts its elements into a word-bounded,
non-capturing group. For instance,

```yaml
tokens:
  - appears to be
  - arguably
```

becomes `\b(?:appears to be|arguably)\b`.

`raw`, on the other hand, simply concatenates its elements&mdash;so, something
like

```yaml
raw:
  - '(?:foo)\sbar'
  - '(baz)'
```

becomes `(?:foo)\sbar(baz)`.


### `substitution`

**Example Definition:**

```yaml
extends: substitution
message: Consider using '%s' instead of '%s'
level: warning
ignorecase: false
# swap maps tokens in form of bad: good
swap:
  abundance: plenty
  accelerate: speed up
```

**Key Summary:**

|     NAME     |   TYPE   |                       DESCRIPTION                        |
|--------------|----------|----------------------------------------------------------|
| `ignorecase` | `bool`   | Makes all matches case-insensitive.                      |
| `nonword`    | `bool`   | Removes the default word boundaries (`\b`).              |
| `swap`       | `map`    | A sequence of `observed: expected` pairs.                |
| `pos`        | `string` | A regular expression matching tokens to parts of speech. |

`substitution` associates a string with a preferred form. If we want to suggest
the use of "plenty" instead of "abundance," for example, we'd write:

```yaml
swap:
  abundance: plenty
```

The keys may be regular expressions, but they can't include nested capture groups:

```yaml
swap:
  '(?:give|gave) rise to': lead to # this is okay
  '(give|gave) rise to': lead to # this is bad!
```

Like `existence`, `substitution` accepts the keys `ignorecase` and `nonword`.

`substitution` can have one or two `%s` format specifiers in its message. This allows us to do either of the following:

```yaml
message: "Consider using '%s' instead of '%s'"
# or
message: "Consider using '%s'"
```

### `occurrence`

**Example Definition:**

```yaml
extends: occurrence
message: "More than 3 commas!"
level: error
# Here, we're counting the number of times a comma appears in a sentence.
# If it occurs more than 3 times, we'll flag it.
scope: sentence
ignorecase: false
max: 3
token: ','
```

**Key Summary:**

|  NAME   |   TYPE   |                           DESCRIPTION                            |
|---------|----------|------------------------------------------------------------------|
| `max`   | `int`    | The maximum amount of times `token` may appear in a given scope. |
| `token` | `string` | The token of interest.                                           |

`occurrence` limits the number of times a particular token can appear in a given scope. In the example above, we're limiting the number of words per sentence.

This is the only extension point that doesn't accept a format specifier in its message.

### `repetition`

**Example Definition:**

```yaml
extends: repetition
message: "'%s' is repeated!"
level: error
alpha: true
tokens:
  - '[^\s]+'
```

**Key Summary:**

|     NAME     |  TYPE   |                          DESCRIPTION                           |
|--------------|---------|----------------------------------------------------------------|
| `ignorecase` | `bool`  | Makes all matches case-insensitive.                            |
| `alpha`      | `bool`  | Limits all matches to alphanumeric tokens.                     |
| `tokens`     | `array` | A list of tokens to be transformed into a non-capturing group. |

`repetition` looks for repeated occurrences of its tokens. If `ignorecase` is set to `true`, it'll convert all tokens to lower case for comparison purposes.

### `consistency`

**Example Definition:**

```yaml
extends: consistency
message: "Inconsistent spelling of '%s'"
level: error
scope: text
ignorecase: true
nonword: false
# We only want one of these to appear.
either:
  advisor: adviser
  centre: center
```

**Key Summary:**

|     NAME     |  TYPE  |                            DESCRIPTION                             |
|--------------|--------|--------------------------------------------------------------------|
| `nonword`    | `bool` | Removes the default word boundaries (`\b`).                        |
| `ignorecase` | `bool` | Makes all matches case-insensitive.                                |
| `either`     | `map`  | A map of `option 1: option 2` pairs, of which only one may appear. |

`consistency` will ensure that a key and its value (for instance, "advisor" and "adviser") don't both occur in its scope.

### `conditional`

**Example Definition:**

```yaml
extends: conditional
message: "'%s' has no definition"
level: error
scope: text
ignorecase: false
# Ensures that the existence of 'first' implies the existence of 'second'.
first: \b([A-Z]{3,5})\b
second: (?:\b[A-Z][a-z]+ )+\(([A-Z]{3,5})\)
# ... with the exception of these:
exceptions:
  - ABC
  - ADD
```

**Key Summary:**

|     NAME     |   TYPE   |             DESCRIPTION             |
|--------------|----------|-------------------------------------|
| `ignorecase` | `bool`   | Makes all matches case-insensitive. |
| `first`      | `string` | The antecedent of the statement.    |
| `second`     | `string` | The consequent of the statement.    |
| `exceptions` | `array`  | An array of strings to be ignored.  |

`conditional` ensures that the existence of `first` implies the existence of `second`. For example, consider the following text:

<!-- vale off -->

> According to Wikipedia, the World Health Organization (WHO) is a specialized agency of the United Nations that is concerned with international public health. We can now use WHO because it has been defined, but we can't use DAFB because people may not know what it represents. We can use DAFB when it's presented as code, though.

<!-- vale on -->

Running `vale` on the above text with our example rule yields the following:

```shell
test.md:1:224:vale.UnexpandedAcronyms:'DAFB' has no definition
```

`conditional` also takes an optional `exceptions` list. Any token listed as an exception won't be flagged.

### `capitalization`

**Example Definition:**

```yaml
extends: capitalization
message: "'%s' should be in title case"
level: warning
scope: heading
# $title, $sentence, $lower, $upper, or a pattern.
match: $title
style: AP # AP or Chicago; only applies when match is set to $title.
```

**Key Summary:**

|     NAME     |   TYPE   |                       DESCRIPTION                        |
|--------------|----------|----------------------------------------------------------|
| `match`      | `string` | $title, $sentence, $lower, $upper, or a pattern.         |
| `style`      | `string` | AP or Chicago; only applies when match is set to $title. |
| `exceptions` | `array`  | An array of strings to be ignored.                       |

`capitalization` checks that the text in the specified scope matches the case of `match`. There are a few pre-defined variables that can be passed as matches:

<!-- vale off -->

- `$title`: "The Quick Brown Fox Jumps Over the Lazy Dog."
- `$sentence`: "The quick brown fox jumps over the lazy dog."
- `$lower`: "the quick brown fox jumps over the lazy dog."
- `$upper`: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

<!-- vale on -->

Additionally, when using `match: $title`, you can specify a style of either AP or Chicago.

### `readability`

**Example Definition:**

```yaml
extends: readability
message: "Grade level (%s) too high!"
level: warning
grade: 8
metrics:
  - Flesch-Kincaid
  - Gunning Fog
```

**Key Summary:**

|   NAME    |  TYPE   |                                        DESCRIPTION                                         |
|-----------|---------|--------------------------------------------------------------------------------------------|
| `metrics` | `array` | One or more of Gunning Fog, Coleman-Liau, Flesch-Kincaid, SMOG, and Automated Readability. |
| `grade`   | `float` | The highest acceptable score.                                                              |

`readability` calculates a readability score according the specified metrics. The supported tests are Gunning-Fog, Coleman-Liau, Flesch-Kincaid, SMOG, and Automated Readability.

If more than one is listed (as seen above), the scores will be averaged. This is also the only extension point that doesn't accept a scope, as readability is always calculated using the entire document.

`grade` is the highest acceptable score. Using the example above, a warning will be issued if `grade` exceeds 8.

### `spelling`

**Example Definition:**

```yaml
extends: spelling
message: "Did you really mean '%s'?"
level: error
ignore: ci/vocab.txt
```

**Key Summary:**

|   NAME    |   TYPE   |                              DESCRIPTION                               |
|-----------|----------|------------------------------------------------------------------------|
| `aff`     | `string` | The fully qualified path to a Hunspell-compatible `.aff` file.         |
| `custom`  | `bool`   | Turn off the default filters for acronyms, abbreviations, and numbers. |
| `dic`     | `string` | The fully qualified path to a Hunspell-compatible `.dic` file.         |
| `filters` | `array`  | An array of patterns to ignore during spell checking.                  |
| `ignore`  | `string` | A relative path (from `StylesPath`) to a personal vocabulary file consisting of one word per line to ignore. |

`spelling` implements spell checking based on Hunspell-compatible dictionaries. By default, Vale includes [en_US-web](https://github.com/errata-ai/en_US-web)—an up-to-date, actively maintained dictionary. However, you may also specify your own via the `dic` and `aff` keys (the fully qualified paths are required; for example, `/usr/share/hunspell/en_US.dic`).

`spelling` also accepts an `ignore` file, which consists of one word per line to be ignored during spell checking. You may further customize the spell-checking experience by defining *filters*:

```yaml
extends: spelling
message: "Did you really mean '%s'?"
level: error
# This disables the built-in filters. If you omit this key or set it to false,
# custom filters (see below) are added on top of the built-in ones.
#
# By default, Vale includes filters for acronyms, abbreviations, and numbers.
custom: true
# A "filter" is a regular expression specifying words to ignore during spell
# checking.
filters:
  # Ignore all words starting with 'py' -- e.g., 'PyYAML'.
  - '[pP]y.*\b'
# Vale will search for these files under $StylesPath -- so, vocab.txt is assumed
# to be $StylesPath/vocab.txt.
ignore:
  - vocab.txt
```

### `sequence` (v1.7.0)

#### Example definition

```yaml
extends: sequence
message: "The infinitive '%[4]s' after 'be' requries 'to'. Did you mean '%[2]s %[3]s *to* %[4]s'?"
tokens:
  - tag: MD
  - pattern: be
  - tag: JJ
  - tag: VB|VBN
```

#### Key summary

| Name | Type | Description |
| :--- | :--- | :--- |
| `tokens` | `[]NLPToken` | A list of tokens with associated NLP metadata. |
| `ignorecase` | `bool` | Makes all matches case-insensitive. |

Unlike the other extension points, `sequence` aims to support grammar-focused
rules (rather than "style"). Its built on top of [`prose`](https://github.com/jdkato/prose)
(an open-source natural language processing library) and makes significant use
of part-of-speech tagging.

An individual `NLPToken` has the following structure:

```yaml
# [optional]: A regular expression (required
# if `tag` isn't given).
pattern: '...'

# [optional]: If true, indicates that we
# *shouldn't* match this token.
negate: true   # or false

# [optional]: A part-of-speech tag (required
# if `pattern` isn't given).
tag: '...'

# [optional]: An integer meaning that there may
# be up to `n` (3, in this case) tokens between
# this token and the next one.
skip: 3
```

The example rule illustrates the basics of the extension point: we're looking
for a particular *sequence* of tokens (which can either be a regular
expression or a part-of-speech tag). The `|` notation means that we'll accept
`VB` or `VBN` in position 4.

There's also new notation in the `message`:  `%[4]s` is like `%s`, but
specifically refers to the 4th token in our sequence.

A full list of supported part-of-speech tags can be [found here](https://github.com/jdkato/prose#tagging).

<!-- vale 18F.Clarity = YES -->

## Actions

:::warning Heads up!
Rule actions are currently only supported in **Atom**, **Visual Studio Code**, and **Sublime Text 3**. Support for other clients is on the way!
:::

In addition to implementing your own rules via the available checks, you can also assign an "action" to a rule. The goal of an action is to provide a list of possible solutions for a given rule.

An action consists of a `name` and an array of `params`, and can be added to any rule definition&mdash;for example, a `spelling` rule that uses the `suggest` action:

```yaml
extends: spelling
message: "Did you really mean '%s'?"
level: error
action:
  name: suggest
  params:
    - spellings
ignore:
  - vocab.txt
```

### `suggest`

**Example Definition:**

```yaml
action:
  name: suggest
  params:
    - spellings
```

**Param Summary:**

|   NAME    |   PARAMETERS   |                              DESCRIPTION                               |
|-----------|----------|------------------------------------------------------------------------|
| `spellings`     | N/A | Returns an array of possible replacements for a misspelled word. |

`suggest` takes a single parameter (one of the options in the able above) and returns an array of possible replacements.

### `replace`

:::tip Tip
Rules that extend `substitution` will automatically populate the `params` array, so you can simply provide the name:

```yaml
action:
  name: replace
```
:::

**Example Definition:**

```yaml
action:
  name: replace
  params:
    - option1
    - option2
    ...
```

`replace` returns an array of user-provided replacements.

### `remove`

**Example Definition:**

```yaml
action:
  name: remove
```

`remove` will remove the matched text of any rule.

### `convert`

**Example Definition:**

```yaml
action:
  name: convert
  params:
    - simple
```

**Param Summary:**

|   NAME    |   PARAMETERS    |                              DESCRIPTION                               |
|-----------|----------|------------------------------------------------------------------------|
| `simple`     | N/A | Return the matched text as a lowercased, space-delimited string. |

`convert` will convert the case of the matched text of any rule according to the parameter provided.

### `edit`

**Example Definition:**

```yaml
action:
  name: edit
  params:
    - remove
    - '.?!'
```

**Param Summary:**

|   NAME    |   PARAMETERS   |                              DESCRIPTION                               |
|-----------|----------|------------------------------------------------------------------------|
| `replace`     | `string`, `string` | Replace the first parameter with the second. |
| `trim`     | `string` | Trim the first parameter from the end of the matched text. |
| `remove`     | `string` | Remove the first parameter from the both start and end of the matched text. |
| `split`     | `string`, `int` | Split the matched text on the first parameter at the index of the second parameter. |

`edit` will perform an in-place edit on the match string according to the provided parameters.
