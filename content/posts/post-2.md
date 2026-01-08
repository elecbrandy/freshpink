+++
title = '02. Features'
date = 2025-03-28
draft = false
featured_image = "https://raw.githubusercontent.com/elecbrandy/freshpink/gh-pages/basic.png"
tags = ['tag_a', 'tag_c']
+++

<br>

## 1. Main Image
____
You can set a main image on the homepage.
Add the image URL in the `[params]` section of `hugo.toml` under `mainImageUrl`.

If you don’t want a main image, set `showMainImage` to `false`.

```toml
mainImageUrl = "https://i.imgur.com/URQWyyY.png"
showMainImage = true
```

<br>
<br>

## 2. GitHub Contribution Chart
____

You can also show your GitHub contribution graph on the homepage.
Add your GitHub username to `githubUsername` in the `[params]` section of `hugo.toml`.
Control visibility with `showGithubChart`.

```toml
githubUsername = "elecbrandy"
showGithubChart = true
```

<br>
<br>

## 3. Primary Color
____
By default, the primary color is set to *freshpink*.
You can change it to any color you like in `hugo.toml` using a hex code.

```toml
primaryColor = "#fa8b84"
```

<br>
<br>

## 4. Featured Image in Posts
____
Each post can have a featured image.
At the top of your `.md` file, add the following in TOML format. This will display the image above your post.

```markdown
+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date }}
featured_image = "/basic.png"
tags = ['tag1']
draft = true
+++
```

<br>
<br>

## 5. Tags
____
In the front matter of each `.md` file, you’ll see a `tags = []` field.
Use this to assign tags to your post.

```markdown
tags = ['tag_a']
```

You can assign multiple tags ->

```markdown
tags = ['tag_a', 'tag_c']
```

To browse posts by tag, create a **Tags page**:

1. Go to `content/tags` (create it if it doesn’t exist).
2. Inside, create a directory named after your tag (e.g., `unix`).
   This makes `content/tags/unix` and completes the setup.

<br>
<br>

## 6. Table of Contents (TOC)
____
The theme includes a TOC on the left side of the post.
By default, it is transparent so it doesn’t distract while reading. When you hover over it, it becomes visible and clickable.

<br>
<br>

## 7. Back to Top Button
____
A "Back to Top" button is included with [Vanilla Back to Top](https://github.com/vfeskov/vanilla-back-to-top).
It makes navigation easier by letting readers quickly return to the top of the page.

<br>
<br>
