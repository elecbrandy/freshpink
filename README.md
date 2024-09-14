# freshPink

![tn.png](https://raw.githubusercontent.com/ElecBrandy/freshpink/main/images/tn.png)
![screenshot.png](https://raw.githubusercontent.com/elecbrandy/freshpink/main/images/screenshot.png)

Hello! Let me introduce the **freshPink** theme!  

## Demo Site
Here is the demo site where you can find a simple example and a detailed tutorial.
[Go to Demo site](https://elecbrandy.github.io/freshpink/).

## Installation
There are two methods to install the freshPink theme. You can either use Git submodules (recommended for easy updates) or download it directly. Unless there's a specific reason, we recommend using the submodule method.

### Method 1: Install via Git Submodule (Recommended)

1. **Navigate to Your Hugo Site Directory**:
   Open a terminal and navigate to the root directory of your Hugo site. If you haven’t created a Hugo site yet, you can do so with the following command:

```bash
hugo new site yourSiteName
```

2. **Add Theme as a Git Submodule**:
   Add the freshPink theme to your site as a Git submodule. Run the following command in the terminal:

```bash
git submodule add git@github.com:ElecBrandy/freshpink.git themes/freshpink
```

3. **Update Site Configuration**:
   Open your site’s `config.toml` file in a text editor and update the `theme` variable to `"freshpink"`:

```toml
theme = "freshpink"
```

4. **Preview Your Site**:
   To ensure everything works correctly, run the following command to start the local server and preview your site:

```bash
hugo server
```

### Method 2: Download and Install Manually

1. **Download the Theme**:
   Go to the [FreshPink GitHub repository](https://github.com/ElecBrandy/freshpink) and download the theme as a ZIP file.

2. **Extract and Move the Theme**:
   Extract the ZIP file and move the extracted folder to the `themes` directory in your Hugo site.

3. **Update Site Configuration**:
   Just like with the Git submodule method, open your `config.toml` file and set the `theme` variable to `"freshpink"`.

4. **Preview Your Site**:
   Run the following command to build and preview your site locally:

```bash
hugo server
```

## Customizing the Theme

The freshPink theme is designed to be easily customizable. You can modify the styles, layouts, and content as needed to fit your site. Follow the tutorial on the demo site and try customizing it yourself!

> **warning!**
> If you continue to see `.md` files that you didn't create, such as post-1.md, it's most likely from exampleSite, whose folder is `/theme/freshpink/exampleSite`. Feel free to delete it, but for the sake of a smooth blogging experience, get rid of the examples! :)

## Need Help?

If you encounter any issues or have questions, feel free to open an issue on the [GitHub repository](https://github.com/ElecBrandy/freshpink/issues).

Thank you for choosing the freshPink theme! :)
