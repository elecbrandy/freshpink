+++
title = '01. freshPink'
date = 2025-03-28
draft = false
featured_image = "https://raw.githubusercontent.com/elecbrandy/freshpink/gh-pages/basic.png"
tags = ['tag_a']
+++

<br>

## 1. freshPink – Hugo Theme
____

<img src="https://raw.githubusercontent.com/elecbrandy/freshpink/main/images/tn.png" width="600">
<img src="https://raw.githubusercontent.com/elecbrandy/freshpink/main/images/screenshot.png" width="600">

Welcome to the **freshPink** theme! A clean and minimalist theme for [Hugo](https://gohugo.io/), designed to give your blog a fresh look.

<br>
<br>

## 2. Demo Site
____

Check out the [**Demo Site**](https://elecbrandy.github.io/freshpink/) for an example and detailed instructions.  

This guide walks you through applying the freshpink theme to a new Hugo site using **Hugo Modules** — the recommended modern way to manage themes.

<br>
<br>

## 3. Prerequisites
____
- Hugo **v0.110+ extended**  
- Git installed  
- Terminal (macOS/Linux/WSL)  

Check your Hugo version!

```bash
hugo version
```

<br>
<br>

## 4. Let's start
____

### 4-1. Create a New Hugo Site

```bash
hugo new site myblog
cd myblog
```

<br>

### 4-2. Initialize Hugo Modules

```bash
hugo mod init github.com/yourname/myblog
```

Replace `yourname/myblog` with your GitHub path (or any unique identifier).
That means the repository address that you will host through GitHub. In my case, I made it `hugo mod init github.com/elecbrandy/elecbrandy.github.io`.

<br>

### 4-3. Update `hugo.toml`

Open the generated `hugo.toml` file and **replace its contents completely** with the configuration below. Then, update it with your own information -> 

* `baseURL`: Enter the URL of your GitHub repository (e.g. `https://elecbrandy.github.io/`)
* `title`: Choose the name you want for your blog
* `githubUsername`: Your GitHub username — this is required to display your contribution graph (grass) on the homepage
* `googleAnalytics`: (Optional) If you want to use Google Analytics, add your tracking ID here
* `primaryColor`: Primary theme color (hex code)
* `showGithubChart`: Set to true to display the GitHub contributions chart (true / false)

* Important: **Do not add or define a `theme` field.** We're using Hugo Modules to manage the theme, so this must be left out.

``` toml
baseURL = 'https://example.org/' # your git repository address
title = 'freshpink' # your own blog title
languageCode = 'en-us'
canonifyURLs = true

[[menus.main]]
name = 'Home'
pageRef = '/'
weight = 10

[[menus.main]]
name = 'TAGS'
pageRef = '/tags/'
weight = 20

[[menus.main]]
name = 'ABOUT'
pageRef = '/about/'
weight = 30

[module]
  [module.hugoVersion]
    extended = true
    min = "0.116.0"
  [[module.imports]]
    path = "github.com/elecbrandy/freshpink"

[params]
  # --- Site Metadata ---
  googleAnalytics = "G-000000000"
  copyright = 'Copyright © 2024 elecbrandy'

  # --- Theme & Display Settings ---
  primaryColor = "#fa8b84"
  math = true

  # --- GitHub Chart ---
  githubUsername = "elecbrandy"
  showGithubChart = true

  # --- Main Image ---
  mainImageUrl = "https://i.imgur.com/URQWyyY.png"
  showMainImage = true

[taxonomies]
  tag = 'tags'

[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true
```

<br>

### 4-4. Download the Theme

```bash
hugo mod tidy
```

<br>

### 4-5. Create Your First Post

```bash
hugo new posts/hello.md
```
<br>

### 4-6. Run the Local Server

```bash
hugo server -D
```

Then open (local check) -> [http://localhost:1313](http://localhost:1313)  

You should see your blog styled with the **freshpink** theme! 🎉

<br>
<br>

## 5. Need Help?
____

If you have any issues or questions, please feel free to open an issue on the [GitHub repository](https://github.com/elecbrandy/freshpink/issues).

Thank you for choosing the freshPink theme! Enjoy your blogging experience!
