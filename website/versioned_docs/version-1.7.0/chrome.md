---
id: version-1.7.0-chrome
title: Google Chrome
original_id: chrome
---

:::note
Our docs have an official new home at https://docs.errata.ai/vale-server/clients/chrome.
:::

## Installation

Go to the [installation page](https://chrome.google.com/webstore/detail/vale-server/goinboihbomchileeihgfnbohjdhfcoi) and click the *Add to Chrome* button:

<img src="assets/ui/Google/install.png">

After installing, you'll need to refresh the extension:

<img src="assets/ui/Google/refresh.png">

Then, to enable the extension for the current tab, click the extension's icon and then *ENABLE*:

<img src="assets/ui/Google/enable.png">

The icon will turn from black to blue and you're ready to start writing:

<img src="assets/ui/Google/ready.png">

## Usage

This extension supports two HTML elements: `<textarea>` and `[contenteditable]`.

In `<textarea>` elements, you'll see in-text markers (unless disabled in your settings) and an indicator below the icon:

<img src="assets/ui/Google/text.png">

In `[contenteditable]` elements (such as WYSIWYG editors), you'll only see the indicator below the icon.

Clicking on the extension's icon will bring up an alert panel that shows all suggestions, warnings, and errors found:

<img src="assets/ui/Google/alerts.png">

## Configuration

:::note
In-text makers (highlighting around words) are currently only available for `<textarea>` elements&mdash;they aren't supported in `[contenteditable]` elements such as WYSIWYG editors.
:::

To open the settings page, click the extension's icon and then *OPTIONS*:

<img src="assets/ui/Google/config.png">

## Uninstallation

Go to the [installation page](https://chrome.google.com/webstore/detail/vale-server/goinboihbomchileeihgfnbohjdhfcoi) and click the *Remove from Chrome* button:

<img src="assets/ui/Google/uninstall.png">
