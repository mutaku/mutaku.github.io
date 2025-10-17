# MkDocs Material Site

This is the source code for Matthew Martz's personal website built with MkDocs Material.

## Features

- 🎨 Modern, responsive design with Material Design
- 📱 Mobile-first approach
- 🌓 Dark/light theme support
- 📝 Built-in blog functionality
- 🔍 Advanced search capabilities
- ⚡ Fast build times and excellent performance
- 🎯 SEO optimized

## Local Development

### Prerequisites

- Python 3.8 or higher
- pip

### Setup

1. Clone the repository:
```bash
git clone https://github.com/mutaku/mutaku.github.io.git
cd mutaku.github.io/new-site
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Serve locally:
```bash
mkdocs serve
```

4. Open your browser to `http://127.0.0.1:8000`

### Building for Production

```bash
mkdocs build
```

## Content Structure

- `docs/index.md` - Homepage
- `docs/about.md` - About page
- `docs/experience/` - Professional experience pages
- `docs/blog/` - Blog posts and index
- `docs/assets/` - Images and static files
- `docs/stylesheets/` - Custom CSS
- `docs/javascripts/` - Custom JavaScript

## Blog Posts

Blog posts are located in `docs/blog/posts/` and follow the structure:
```
docs/blog/posts/YYYY/MM/DD/post-slug.md
```

Each post should include frontmatter:
```yaml
---
draft: false
date: YYYY-MM-DD
categories:
  - Category Name
authors:
  - matthew
---
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch.

## Technology Stack

- **MkDocs**: Static site generator
- **Material for MkDocs**: Modern theme
- **Python**: Build toolchain
- **GitHub Actions**: CI/CD
- **GitHub Pages**: Hosting

## License

© 2023-2025 Matthew Martz. All rights reserved.
