+++
title = '02. Color set'
date = 2024-01-02
draft = false
featured_image = "https://raw.githubusercontent.com/ElecBrandy/freshpink/gh-pages/basic.png"
tags = ['info', 'tag1']
+++

<br>

> Color Set

This theme supports **light/dark mode**.
You can switch between the modes via the toggle in the top right corner of the header.

## @root
<div style="margin: 10px 0px;">
  <div style="padding: 10px; background-color: #FF53B0;">
      <strong>primary-color</strong>
  #FF53B0
  </div>
  <div style="padding: 10px; color: #181818; background-color: #FFFFFF;">
      <strong>white-color</strong>
  #FFFFFF
  </div>
  <div style="padding: 10px; color: #181818; background-color: #f2f2f2;">
      <strong>lgray-color</strong>
  #f2f2f2
  </div>
  <div style="padding: 10px; color: #FFFFFF; background-color: #282828;">
      <strong>dgray-color</strong>
  #282828
  </div>
  <div style="padding: 10px; color: #FFFFFF; background-color: #181818;">
      <strong>black-color</strong>
  #181818
  </div>
</div>

<br>

## @light
<div style="margin: 10px 0px;">
  <div style="padding: 10px; color: #181818; background-color: #FFFFFF;">
      <strong>background-color</strong>
  #FFFFFF
  </div>
  <div style="padding: 10px; color: #FFFFFF; background-color: #282828;">
      <strong>gray-color</strong>
  #282828
  </div>
  <div style="padding: 10px; color: #FFFFFF; background-color: #181818;">
      <strong>text-color</strong>
  #181818
  </div>
</div>

<br>

## @dark
<div style="margin: 10px 0px;">
  <div style="padding: 10px; color: #FFFFFF; background-color: #181818;">
      <strong>background-color</strong>
  #181818
  </div>
  <div style="padding: 10px; color: #181818; background-color: #f2f2f2;">
      <strong>gray-color</strong>
  #f2f2f2
  </div>
  <div style="padding: 10px; color: #181818; background-color: #FFFFFF;">
      <strong>text-color</strong>
  #FFFFFF
  </div>
</div>


<br>
<br>

> CSS code

This is the CSS that represents the above color settings. If you want to change the color settings, you can do so in `assets/css/main.css`.

``` css
:root {
  --primary-color: #FF53B0;
  --white-color: #FFFFFF;
  --black-color: #181818;
  --dgray-color: #282828;
  --lgray-color: #f2f2f2;
}

body[data-theme="light"] {
  --background-color: var(--white-color);
  --text-color: var(--black-color);
  --gray-color: var(--lgray-color);
}

body[data-theme="dark"] {
  --background-color: var(--black-color);
  --text-color: var(--white-color);
  --gray-color: var(--dgray-color);
}
```
