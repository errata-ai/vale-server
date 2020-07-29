---
id: version-1.5.0-sync
title: Syncing
original_id: sync
---

Vale Server supports overriding the default `StylesPath` value on a
[per-project](ui#projects) basis.

<table style="width:100%">
  <caption>Default <code>StylesPath</code> values</caption>
  <tr>
    <th>macOS</th>
    <th>Windows</th>
  </tr>
  <tr>
    <td><code>~/Library/Application Support/errata-ai/Vale Server/styles</code></td>
    <td><code>C:/Users/{USER}/AppData/Roaming/errata-ai/Vale Server/styles</code></td>
  </tr>
</table>

You may specify the path to any local directory, which means that you can use
many popular file-sharing services to sync a single `StylesPath` across a team of writers.

## Set up

:::important
Vale Server requires that all paths (on both macOS and Windows) use a forward slash (`/`).
:::

Vale Server works well with file-sharing services that support local
folders such as Dropbox, Google Drive, and Microsoft OneDrive.

To use one of these services to sync your styles, all you need to do is
provide the *absolute path* to the shared folder as the `StylesPath` value in one
of your projects:

![A example config file using a Dropbox folder.](assets/ui/Dropbox.png)

## Permissions

One detail you'll want to consider is whether or not your shared folder will
be *writable*. Vale Server's [dashboard](ui#dashboard) includes the ability to
both install new styles and edit existing ones, which you may not want to allow
directly through the shared folder.

If you only provide your writers with read-level access to the shared folder,
their dashboard's editing features will be disabled while the specific project
is active.

![A Screenshot of Vale Server's lock screen.](assets/ui/lock.png)
