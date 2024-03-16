# FreshPink


![tn.png](https://raw.githubusercontent.com/elecbrandy/freshpink/images/tn.png)
![screenshot.png](https://raw.githubusercontent.com/elecbrandy/freshpink/images/screenshot.png)

Welcome to the FreshPink Hugo Theme! This theme is designed to be easy to use and customize, providing a beautiful and responsive design for your Hugo site.

## Demo site

[Go to Demo site](https://elecbrandy.github.io/freshpink/).

## Installation

There are two methods to install the FreshPink theme: using Git Submodule (recommended for easy updates) and downloading it directly.

### Method 1: Install as a Git Submodule

1. **Navigate to Your Hugo Site Directory**:
   Open a terminal and change directory to your Hugo site root. If you haven't created a Hugo site yet, run `hugo new site yourSiteName` to create one.

2. **Add Theme as a Git Submodule**:
   Add the FreshPink theme to your site as a Git submodule by running the following command:
   ```bash
   git submodule add git@github.com:ElecBrandy/freshpink.git themes/freshpink
   ```

3. **Update Site Configuration**:
   Open your site's `config.toml` file in a text editor and update the `theme` variable to `"freshpink"`:
   ```toml
   theme = "freshpink"
   ```

4. **Preview Your Site**:
   Run your site locally to see the theme in action:
   ```bash
   hugo server
   ```

### Method 2: Download and Install Manually

1. **Download the Theme**:
   Go to the [FreshPink GitHub repository](https://github.com/ElecBrandy/freshpink) and download the theme as a ZIP file.

2. **Extract and Move the Theme**:
   Extract the ZIP file and move the extracted folder to the `themes` directory of your Hugo site.

3. **Update Site Configuration**:
   Just like in the Git Submodule method, open your `config.toml` file and set the `theme` variable to `"freshpink"`.

4. **Preview Your Site**:
   Use the `hugo server` command to build and preview your site locally.

## Customizing the Theme

FreshPink is designed to be easily customizable. You can modify the styles, layouts, and content as needed to suit your site's needs.

## Need Help?

If you encounter any issues or have questions, feel free to open an issue on the [GitHub repository](https://github.com/ElecBrandy/freshpink/issues).

Thank you for choosing FreshPink for your Hugo site! :)
