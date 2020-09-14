---
id: version-1.7.0-usage
title: Usage
original_id: usage
---

:::note
Our docs have an official new home at https://docs.errata.ai/vale-server/usage.
:::

This page provides a step-by-step guide to getting up and running with Vale Server.

## Step 1: Installing a style

The first step you'll need to take before using Vale Server is to install a [style](style).

### Installing a pre-made style

To get started, you'll probably want to use one of our [community-contributed styles](https://github.com/errata-ai/styles):

1. Click the **Open Dashboard...** option from the context menu:

    <img class="rounded" src="assets/ui/menu.gif" style="max-width: 60%;">

2. Click **Styles** from the dashboard sidebar:

    ![A screenshot showing the dashboard's 'Styles' option circled.](assets/ui/styles2.png)

3. Choose a style from the list and click **install**:

    ![A screenshot showing the dashboard's 'Styles' option circled.](assets/ui/install2.png)

   You can click on a style's name to learn more about it.

### Installing a custom style

To install a style that hasn't been submitted to the [library](https://github.com/errata-ai/styles):

1. Click the **Browse Styles...** option from the context menu:

    <img class="rounded" src="assets/ui/menu.gif" style="max-width: 60%;">

2. Copy your style into the `styles` directory.

## Step 2: Creating a project

After you've installed a style (or styles), you need to create a [project](ui#projects).

To open the Projects page, click the **Preferences...** option from the context menu and follow the instructions on [creating a new project](ui#projects).

## Step 3: Updating your vocabulary

1. Click the **Open Dashboard...** option from the context menu.

2. Select your desired project from the drop-down menu:

    ![A screenshot showing the dashboard's project drop-down menu circled.](assets/ui/project-select2.png)

3. Follow the directions for [adding terms](ui#vocabularies) to your project.

## Step 4: Using the clipboard

The **Check Clipboard as...** option allows you to use your Vale Server
configuration anywhere that supports copy-and-paste (for example, web
browsers, email clients, content management systems, etc).

To check your content, simply copy it to your clipboard and choose
**Check Clipboard as...** from the menu:

<img src="assets/ui/macOS/clipboard.png" class="small">

## Step 5: Using a client application

Our third-party integrations provide an enhanced experience for certain
applications. Click on an application below to learn more.


<table style="text-align:center">
  <tr>
    <th>Google Docs</th>
    <th>Sublime Text</th>
    <th>Atom</th>
    <th>VS Code</th>
    <th>Google Chrome</th>
  </tr>
  <tr>
    <td>
        <a href="gdocs" class="img-link">
            <img src="assets/gdocs.png" height="64">
        </a>
    </td>
    <td>
        <a href="https://github.com/errata-ai/SubVale" class="img-link">
            <img src="assets/sublime.png" height="64">
        </a>
    </td>
    <td>
        <a href="https://github.com/errata-ai/vale-atom" class="img-link">
            <img src="assets/atom.png" height="64">
        </a>
    </td>
    <td>
        <a href="https://github.com/errata-ai/vale-vscode" class="img-link">
            <img src="assets/code.png" height="64">
        </a>
    </td>
    <td>
        <a href="chrome" class="img-link">
            <img src="assets/chrome.png" height="64">
        </a>
    </td>
  </tr>
</table>


## Step 6: Creating &amp; testing rules

With Vale Server, you can easily develop and test individual rules for a new or existing style.

<img src="assets/ui/studio.png" class="small">

The "Run" button will execute the rule (left-hand panel) on the provided text (right-hand panel). The "regex101" button will create a new regex101 session using the compiled rule.
