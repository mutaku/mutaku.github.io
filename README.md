# Matthew Martz, PhD - Personal Website

<img width="1024" height="1024" alt="plot_header" src="https://github.com/user-attachments/assets/cdd88648-0923-49a2-8565-75c71156a25c" />

This is the source code for Matthew Martz's personal website built with MkDocs Material - a modern, professional site showcasing expertise in AI, machine learning, and healthcare technology.

## 🌐 Live Site

Visit: [https://mutaku.io](https://mutaku.io)

## 🚀 Features

- 🎨 Modern, responsive design with Material Design
- 📱 Mobile-first approach with clinical blue theme
- 🌓 Dark/light theme support
- 📝 Built-in blog functionality with Python programming tutorials
- � Comprehensive research focus on Healthcare AI platforms
- �🔍 Advanced search capabilities
- ⚡ Fast build times and excellent performance
- 🎯 SEO optimized for professional visibility

## 📁 Site Structure

The new MkDocs Material site is located in the `new-site/` directory and includes:

- **Homepage**: Professional profile with clinical AI focus
- **About Page**: Detailed background and expertise
- **Research Focus**: Comprehensive healthcare AI platform research
- **Experience**: Current and previous positions, achievements
- **Blog**: Technical articles on Python programming and AI
- **Assets**: Profile images and static resources

## 🛠️ Local Development

### Prerequisites

- Python 3.8 or higher
- pip

### Setup & Running

```bash
# Clone and navigate
git clone https://github.com/mutaku/mutaku.github.io.git
cd mutaku.github.io/new-site

# Install dependencies
pip install -r requirements.txt

# Serve locally
mkdocs serve
# or for custom port:
mkdocs serve --dev-addr 127.0.0.1:8090
```

Open your browser to the displayed local URL.

### Building for Production

```bash
cd new-site
mkdocs build --clean
```

## 📝 Content Management

### Adding Blog Posts

Blog posts go in `new-site/docs/blog/posts/YYYY/MM/DD/post-slug.md`:

```yaml
---
draft: false
date: YYYY-MM-DD
categories:
  - Technology
  - Data Science
authors:
  - matthew
---

# Your Post Title

Content here...
```

### Updating Research Content

Edit `new-site/docs/research.md` for healthcare AI platform updates.

## 🚀 Deployment

The site auto-deploys to GitHub Pages via GitHub Actions:

1. Make changes in `new-site/`
2. Build locally: `mkdocs build --clean`
3. Commit and push:
   ```bash
   git add -A
   git commit -m "Update site content"
   git push
   ```

## 🔧 Technology Stack

- **MkDocs Material**: Modern documentation framework
- **Python**: Build toolchain and content management
- **GitHub Actions**: Automated CI/CD pipeline
- **GitHub Pages**: Hosting and deployment
- **Clinical Blue Theme**: Professional healthcare-focused design

## 📊 Key Content Areas

- **Healthcare AI Platform**: 2.3M patient knowledge graph, federated learning
- **Technical Expertise**: 17+ years ML/AI, clinical implementation
- **Research Focus**: Digital twins, precision medicine, biomarker discovery
- **Leadership Experience**: VP-level roles, 25+ member teams

## 📞 Contact

- **Website**: [mutaku.io](https://mutaku.io)
- **Email**: matthew@mutaku.io
- **LinkedIn**: [matthew-martz-phd](https://linkedin.com/in/matthew-martz-phd)
- **GitHub**: [@mutaku](https://github.com/mutaku)

---

© 2023-2025 Matthew Martz. All rights reserved.
