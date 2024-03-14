+++
title = '05. Install'
date = 2024-01-05
draft = false
featured_image = "https://raw.githubusercontent.com/ElecBrandy/freshpink/gh-pages/basic.png"
tags = ['tag1']
+++

<br>

Now, let's launch hugo blog with the freshpink theme.
There are two main ways to apply the theme to your hugo blog. There are two ways to apply the theme to hugo blog: using a submodule or downloading the file directly. Let's take a look at each one and apply the theme slowly.

<br>
<br>

> How to Install

## Method 1: Install as a Git Submodule

### 1. Navigate to Your Hugo Site Directory
Open a terminal and change directory to your Hugo site root. If you haven't created a Hugo site yet, run `hugo new site yourSiteName` to create one.
<br>

### 2. Add Theme as a Git Submodule
Add the FreshPink theme to your site as a Git submodule by running the following command:

```bash
git submodule add git@github.com:ElecBrandy/freshpink.git themes/freshpink
```
<br>

### 3. Update Site Configuration
   Open your site's `config.toml` file in a text editor and update the `theme` variable to `"freshpink"`:
   ```toml
   theme = "freshpink"
   ```
<br>

### 4. Preview Your Site
   Run your site locally to see the theme in action:
   ```bash
   hugo server
   ```
<br>

## Method 2: Download and Install Manually

### 1. Download the Theme
   Go to the [FreshPink GitHub repository](https://github.com/ElecBrandy/freshpink) and download the theme as a ZIP file.
<br>

### 2. Extract and Move the Theme
   Extract the ZIP file and move the extracted folder to the `themes` directory of your Hugo site.
<br>

### 3. Update Site Configuration
   Just like in the Git Submodule method, open your `config.toml` file and set the `theme` variable to `"freshpink"`.
<br>

### 4. Preview Your Site
   Use the `hugo server` command to build and preview your site locally.

<br>
<br>

> Customizing the Theme

FreshPink is designed to be easily customizable. You can modify the styles, layouts, and content as needed to suit your site's needs.

<br>
<br>

> Need Help?

If you encounter any issues or have questions, feel free to open an issue on the [GitHub repository](https://github.com/ElecBrandy/freshpink/issues).

<br>
<br>
Thank you for choosing FreshPink for your Hugo site! :)
