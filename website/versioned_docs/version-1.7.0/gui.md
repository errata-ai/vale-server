---
id: version-1.7.0-ui
title: User Interface
original_id: ui
---

Vale Server's user interface (UI) consists of two parts: a native desktop
application and a web-based dashboard.

## Preferences

To access the main application, click on its menu icon (right-click on Windows):

<img class="rounded" src="assets/ui/menu.gif" style="max-width: 60%;">

And then click the **Preferences...** option from the context menu.

### General

![Preferences (General)](assets/ui/macOS/prefs-general2.png)

- **Automatically check for updates**: If checked, you'll receive a desktop notification (on application start) if there are any new releases of Vale Server available.

- **Notify me about style updates**: If checked, you'll receive a desktop notification (on application start) if there are any available updates to your styles.

- **Compatibility Mode**: If checked, supported clients (VS Code, Atom, and Sublime Text) will check documents according to their associated Vale configuration files whenever possible. You can further customize this functionality through local overrides in your active project:

  - Any multi-value entry in your [project's](#projects) `.vale.ini` (for example, `BasedOnStyles`) will be combined with the remote entry.
  - Any single-value entry in your project's `.vale.ini` (for example, `MinAlertLevel`) will override the remote entry altogether.

### Projects

Projects allow you to manage multiple [Vale configuration files](ini)
in one place. Each project has a name (the left panel) and an associated
configuration file (the right panel):

![Preferences (Projects)](assets/ui/macOS/prefs-projects.png)

To create a new Project, click "Add" and then double-click the new project
to give it a name:

![Preferences (New Project)](assets/ui/macOS/new-project.png)

You can now edit the configuration file on the right to customize the new
project. To remove a project, click its name and then click the "Remove"
button.

After you've created and configured your projects, you can switch
between them by choosing **Select Project** from the menu bar:

<img src="assets/ui/macOS/select-project.png" class="small">

Additionally, each project has an associated *Vocabulary* that you can manage
via the [Dashboard](#dashboard).

### Styles

The Styles page provides quick access to all your installed styles. You can
add your own styles by choosing **Browse Styles...** from the menu bar and then
copying the relevant files.

![Preferences (Styles)](assets/ui/macOS/prefs-styles.png)

### Advanced

The Advanced page allows you to configure the port that Vale Server
will listen on. You'll need to restart the server for the change to take
effect.

![Preferences (Advanced)](assets/ui/macOS/prefs-advanced.png)

## Dashboard

The dashboard provides a web-based interface for managing your Vale-related
assets.

![A screenshot of the Vale Server Dashboard](assets/ui/dash2.png)

To open your dashboard, click the **Open Dashboard...** option from the context
menu.

### Vocabularies

Each of your [Projects](#projects) has an associated [*Vocabulary*](vocab) that allows
you to add your own terms and phrases to any installed [style](#styles).

Vocabulary entries belong to one of two groups:

- `Preferred`: Entries marked as `Preferred` will be enforced on as-entered
  basis&mdash;for example, if the term "JavaScript" is marked as Preferred, any
  variation that doesn't exactly match (for example, `Javascript`, `javascript`, etc.) will
  raise an error. Additionally, any Preferred entries will automatically be
  added as exceptions to `spelling`, `capitalization`, and `conditional` rules
  in all your active styles.

  ![A screenshot of a dashboard entry being created.](assets/ui/dash-entry2.png)

- `Do not use`: Any use of an entry marked as `Do not use` will raise an error.

To manually edit a Vocabulary file, click **Browse Styles...** from the context
menu and then navigate to the `/Vocab/<project name>` directory.

### Styles

The Styles page of the dashboard allows you to browse, install, and update
third-party styles. These styles are open-source and maintained by the community of
Vale Server users.

![A screenshot of the Vale Server Dashboard's Styles page](assets/ui/dash-styles2.png)

See the [dedicated repository](https://github.com/errata-ai/styles) to learn more.
