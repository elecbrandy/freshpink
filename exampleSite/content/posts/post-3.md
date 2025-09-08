+++
title = '03. Shortcuts'
date = 2025-03-28
draft = false
params:
  featured_image = "https://raw.githubusercontent.com/elecbrandy/freshpink/gh-pages/basic.png"
tags = ['tag_b']
+++

<br>

## 1. Series.html
____
Sometimes there are articles that are difficult to categorize using tags alone. In this case, I wanted to organize certain articles into a series, for example, the “freshPink.” Creating a series would make it easier to manage related articles in one place. Adding a collapsible list-like link to each freshPink-specific markdown file would make it easier to jump from article to article, and organize the series.  

<br>

### 1-1. Setting

> Create a Series Data File

First, you need to create a data file that contains the information about the documents in each series. Create a YAML file under Hugo’s `data*/` folder to manage the series information...

Example: `data/series/freshPink.yaml`

``` yaml
title: "freshPink"
items:
  - name: "01. freshPink"
    link: "shpink/posts/post-1"
  - name: "03. features"
    link: "https://elecbrandy.github.io/freshpink/posts/post-2"
  - name: "03. shortcuts"
    link: "https://elecbrandy.github.io/freshpink/posts/post-3"
```

In this file, the `items` list includes the name and link of each document that belongs to the series.

<br>

> Create the Shortcode File

To display the series in a markdown file, you can use the shortcode like this!

``` markdown
{{</* series title="📚 /freshPink tutorial" series="freshPink" */>}}
```

- `title`: This will be the title that users can click to expand the list.
- `series`: Refers to the YAML file name inside the `data/series/` directory (without the file extension).

<br>

### 1-2. Example
When you include that code in your markdown file, the following collapsible list will be generated!

``` markdown
{{< series title="📚 /freshPink tutorial" series="freshPink" >}}
```

<br>
<br>
