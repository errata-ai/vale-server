---
id: version-1.5.0-addons
title: Add-ons
original_id: addons
---

In addition to [styles](style), you can also extend Vale Server's capabilities through add-ons. And, while styles are limited to changing the way Vale Server's built-in features work, add-ons allow you to add completely new features.

## LanguageTool

[LanguageTool](https://languagetool.org/) is an open-source grammar checker that has a [library of over 3,000 English rules](https://community.languagetool.org/rule/list?lang=en&offset=0&max=10).

:::important
Compared to Vale Server, LanguageTool is *slow* and so you'll likely see a decrease in performance when the add-on is active (especially on large files).
:::

Since Vale Server focuses (primarily) on writing style rather than grammatical correctness, integrating with LanguageTool provides a nice balance of functionality: Vale Server will enforce your style guide while LanguageTool checks your grammar.

Additionally, by using this add-on, you also get to take advantage of Vale Server's [understanding of markup](format)&mdash;which LanguageTool lacks altogether on its own.

### Installation

The first step is to install [LanguageTool's standalone desktop application](https://languagetool.org/#more).

After downloading and unzipping the `LanguageTool-x.x` folder, double-click the `languagetool.jar` file to launch the application:

![A screenshot of LanguageTool's desktop app.](assets/ui/LT.png)

Then, navigate to `Text Checking -> Options -> General` and make sure that "Run as server on port" is checked with the port set to `8081`:

![A screenshot of LanguageTool's options dialog.](assets/ui/LT3.png)

Finally, select `File -> Hide to System Tray`:

![A screenshot of LanguageTool's File menu.](assets/ui/LT2.png)

LanguageTool's embedded HTTP server will now run in the background on port `8081`.

### Usage

:::important
Since LanguageTool doesn't understand markup on its own, some of its rules don't
work correctly with Vale Server.

Currently, only rules listed in the `MISC`, `GRAMMAR`, `CONFUSED_WORDS`, and `TYPOS` categories are enabled.
:::

Once LanguageTool is running in the background, you simply need to add `LanguageTool` to your `BasedOnStyles` list in one of your projects:

![A screenshot Vale Server's project management dialog.](assets/ui/LT4.png)

You'll now see results from LanguageTool in our client plugins.
