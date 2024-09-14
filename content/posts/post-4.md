+++
title = '04. Shortcuts'
date = 2024-01-04
draft = false
featured_image = "https://raw.githubusercontent.com/ElecBrandy/freshpink/gh-pages/basic.png"
tags = ['tag_b']
+++

<br>

On this page, we'll introduce you to shortcuts that **freshPink** supports for pages. We'll be adding more of these in the future.

<br>
<br>

## 1. alert
____
This works similarly to a button that lets you jump to a link of your choice. You can associate this with a specific tag, home, post, etc. I'm actually not sure I like the design that much. more..

### 1-1. setting
``` html
{{</* alert */>}}
	<a href="https://example.org/">placeholder</a>
{{</* /alert */>}}
```
<br>

### 1-2. example

{{<alert>}}
	<a href="https://elecbrandy.github.io/freshpink/">placeholder</a>
{{</alert>}}


<br>
<br>

## 2. github log img
____
With this feature, you can attach images to your GitHub account's commit and push logs. The account is specified in the githubUsername part of the `config.toml` file. and If we wanted to change the colorset for this image, we could go into /layouts/shortcodes/githubcommit.html and just change the color code in the middle (the part `here!!!`).

### 2-1. setting

#### set user name
``` toml
[params]
	githubUsername = "your_username"
```

#### set color
```html
<div class="commit">
	<img src="https://ghchart.rshah.org/here!!!/{{ .Site.Params.githubUsername }}"/>
</div>
```

### 2-2. example
``` html
{{</* githubcommit */>}}
```

{{<githubcommit>}}

<br>
<br>

## 3. series.html
____
Sometimes there are articles that are difficult to categorize using tags alone. In this case, I wanted to organize certain articles into a series, for example, the “freshPink.” Creating a series would make it easier to manage related articles in one place. Adding a collapsible list-like link to each freshPink-specific markdown file would make it easier to jump from article to article, and organize the series.  

<br>

### 3-1. setting

#### 3-1-1. Create a Series Data File
First, you need to create a data file that contains the information about the documents in each series. Create a YAML file under Hugo’s `data*/` folder to manage the series information..

Example: `data/series/freshPink.yaml`

``` yaml
title: "freshPink"
items:
  - name: "01. freshPink"
    link: "shpink/posts/post-1"
  - name: "02. colorSet"
    link: "https://elecbrandy.github.io/freshpink/posts/post-2"
  - name: "03. features"
    link: "https://elecbrandy.github.io/freshpink/posts/post-3"
  - name: "04. shortcuts"
    link: "https://elecbrandy.github.io/freshpink/posts/post-4"
```

In this file, the `items` list includes the name and link of each document that belongs to the series.

<br>

#### 3-1-2. Create the Shortcode File
To display the series in a markdown file, you can use the shortcode like this:

``` markdown
{{</* series title="📚 /freshPink tutorial" series="freshPink" */>}}
```

- `title`: This will be the title that users can click to expand the list.
- `series`: Refers to the YAML file name inside the `data/series/` directory (without the file extension).

<br>

### 3-2. example
When you include that code in your markdown file, the following collapsible list will be generated:

{{< series title="📚 /freshPink tutorial" series="freshPink" >}}

<br>
<br>