# Hugo pixwind


## Install from the command line

If you don't want to use the [starter](https://github.com/7ingwang/hugo-theme-pixwind), you can start from scratch and just install this theme from the command line.

Create a new Hugo site and initialize your project as a [Hugo module](https://gohugo.io/hugo-modules/use-modules/):

```
hugo new site my-awesome-blog
cd my-awesome-blog
hugo mod init
```

Edit your `config.toml` to add the theme settings:

```toml
# pixwind settings
theme = "github.com/7ingwang/hugothemes/pixwind"

paginate = 6

[social]
twitter= "#"
github= "#"
linkedin= "#"
instagram = "#"
dribbble = "#"
youtube = "#"

[taxonomies]
author = "authors"

```

Create your first draft post and preview it locally:

```
hugo new post/my-first-post.md
hugo server -D
```

You're good to go!

## Customization

### Logo

Override `/themes/pixwind/layouts/partials/icons/ui/logo.html` with your own file at `/layouts/partials/icons/ui/logo.html`; include your logo in SVG format for desktop and mobile formats.

pixwind supports light and dark mode. To have your logo respond in kind, add `class="change-fill"` to the svg path(s).

### Socials

In order for the Socials to be surfaced in Forestry, you should copy the theme's `config/_default/social.yaml` to your project.

### Authors

You should register authors as a taxonomy in your project's `config.yaml``

```yaml
taxonomies:
  author: authors
```

#### Creating authors

Authors must be added in `content/authors`.
Create a folder per author and add an `_index.md` file in it.

Here's an example of the front matter fields supported by default:

```yaml
# /content/authors/firstname-lastname/_index.md
---
title: Dennis Brotzky
bio: |
  Written by You. This is where your author bio lives. Share your work, your
  joys and of course, your Twitter handle.
avatar: /images/dennis-brotzky.jpg
featured: true
social:
  - title: unsplash
    url: https://unsplash.com
  - title: github
    url: https://github.com
  - title: github
    url: https://github.com
  - title: github
    url: https://github.com
  - title: github
    url: https://github.com
---
```

#### Assigning authors to posts.
Ad the name of the author to the "authors" field:

```yaml
authors:
  - Dennis Brotzky
  - Thiago Costa
```
### Newsletter CTA

This theme includes a shortcode for a newsletter callout form that you can add to any page.
It uses [formspree.io](//formspree.io/) as proxy to send the actual email. Each month, visitors can send you up to one thousand emails without incurring extra charges. Visit the Formspree site to get get going add your Formspree email to your shortcode like this:

```
{{< subscribe email="your@email.com" >}}
```
