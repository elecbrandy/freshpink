+++
title = '02. Color set'
date = 2024-01-02
draft = false
featured_image = "https://raw.githubusercontent.com/ElecBrandy/freshpink/gh-pages/basic.png"
tags = ['tag_a', 'tag_b']
+++

<br>

This theme supports **light/dark mode**.
You can switch between the modes via the toggle in the main header's `tolight` or `todark`.

<br>
<br>

## 1. Color set
____
Color-related modifications can be made at the top of `asset/css/main.css`. Here you can also set specific colors for lightmode and darkmode if you want.

``` css
:root {
	--primary-color: #e600ff;
	--white-color: #FFFFFF;
	--black-color: #181818;
	--dgray-color: #464646;
	--mgray-color: #828282;
	--lgray-color: #f2f2f2;

	--background-color: var(--white-color);
	--text-color: var(--black-color);
	--gray-color: var(--lgray-color);
	--code-color: var(--mgray-color);
}

body[data-theme="light"] {
	--background-color: var(--white-color);
	--text-color: var(--black-color);
	--gray-color: var(--lgray-color);
	--code-color: var(--mgray-color);
}
  
body[data-theme="dark"] {
	--background-color: var(--black-color);
	--text-color: var(--white-color);
	--gray-color: var(--dgray-color);
	--code-color: var(--mgray-color);
}
```

<br>
<br>
