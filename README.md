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

### Automated GitHub Pages Deployment

The site automatically deploys to GitHub Pages via GitHub Actions when changes are pushed to the main branch.

#### Standard Deployment Workflow

```bash
# 1. Navigate to the new-site directory
cd c:\Users\matthew\Programming\mutaku.github.io\new-site

# 2. Make your content changes (edit files in docs/)
# - Update research.md for healthcare AI content
# - Add blog posts in docs/blog/posts/YYYY/MM/DD/
# - Modify styling in docs/stylesheets/extra.css
# - Update configuration in mkdocs.yml

# 3. Test locally before deploying
mkdocs build --clean

# 4. Optional: Serve locally to preview
mkdocs serve --dev-addr 127.0.0.1:8090
# Or serve the built site:
cd site && python -m http.server 8090

# 5. Deploy to production
cd c:\Users\matthew\Programming\mutaku.github.io
git add -A
git commit -m "new site content and engine"
git push
```

#### What Happens During Deployment

1. **GitHub Actions Triggers**: Push to main branch activates the workflow
2. **Environment Setup**: Ubuntu runner with Python 3.11
3. **Dependencies Install**: Installs MkDocs Material and plugins from `new-site/requirements.txt`
4. **Site Build**: Executes `mkdocs build --clean --strict` in the `new-site/` folder
5. **Artifact Upload**: Packages the generated `new-site/site/` directory
6. **Pages Deployment**: Deploys to GitHub Pages at mutaku.io
7. **Live Site**: Changes appear at [https://mutaku.io](https://mutaku.io) within 2-5 minutes

#### Deployment Configuration

**GitHub Actions Workflow**: `.github/workflows/deploy.yml`

```yaml
# Key workflow steps:
- Install dependencies from new-site/requirements.txt
- Build site from new-site/ directory  
- Deploy from new-site/site/ output
- Automatic deployment on main branch pushes
```

**Required GitHub Settings**:

- **Repository Settings → Pages → Source**: "GitHub Actions"
- **Custom Domain**: mutaku.io (configured in Pages settings)
- **Workflow Permissions**: Read repository contents, write to Pages

#### Troubleshooting Deployment

**If deployment fails**:

1. Check [GitHub Actions](https://github.com/mutaku/mutaku.github.io/actions) for error logs
2. Verify `mkdocs build --clean` works locally without errors
3. Ensure all required files are committed and pushed
4. Check that `new-site/requirements.txt` includes all dependencies

**Common issues**:

- **Build errors**: Fix markdown linting issues or missing files
- **Git conflicts**: Resolve with `git pull` before pushing
- **Workflow permissions**: Ensure GitHub Actions has Pages write access
- **Custom domain**: Verify DNS settings for mutaku.io point to GitHub Pages

**Force rebuild**: Use GitHub Actions "Run workflow" button for manual trigger

#### Monitoring Deployment

- **Actions Page**: <https://github.com/mutaku/mutaku.github.io/actions>
- **Pages Settings**: <https://github.com/mutaku/mutaku.github.io/settings/pages>  
- **Site Status**: Monitor build and deployment status in real-time
- **Build Time**: Typical deployment takes 2-3 minutes from push to live site

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
- **Email**: <matthew@mutaku.io>
- **LinkedIn**: [matthew-martz-phd](https://linkedin.com/in/matthew-martz-phd)
- **GitHub**: [@mutaku](https://github.com/mutaku)

---

© 2023-2025 Matthew Martz. All rights reserved.
