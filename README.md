# CV / Portfolio Website

A modern, fast, and responsive CV and portfolio website built with [Astro](https://astro.build/). This project showcases professional experience, technical skills, and project portfolio with a clean, accessible design optimized for performance.

## 🚀 Features

- **Static Site Generation** with Astro for optimal performance
- **Responsive Design** that works on all devices
- **Portfolio Gallery** with project showcases and image galleries
- **Content Management** with structured markdown files
- **SEO Optimized** with sitemap generation and meta tags
- **Fast Loading** with optimized assets and minimal JavaScript
- **Accessible** following WCAG guidelines
- **Professional Layout** with dedicated CV and portfolio sections

## 🛠️ Tech Stack

- **[Astro](https://astro.build/)** - Static Site Generator
- **TypeScript** - Type-safe development
- **CSS3** - Custom styling and responsive design
- **Markdown** - Content management
- **TinaCMS** - Content management system (optional)

## 📁 Project Structure

```text
src/
├── components/          # Reusable Astro components
│   ├── Header.astro
│   ├── Footer.astro
│   ├── PortfolioCard.astro
│   └── ProjectGallery.astro
├── content/            # Content collections
│   ├── home/          # Homepage content
│   └── portfolio/     # Portfolio projects
├── layouts/           # Page layouts
│   ├── PrimaryLayout.astro
│   └── ProjectLayout.astro
├── pages/             # Site pages
│   ├── index.astro    # Homepage
│   ├── cv.astro       # CV page
│   └── portfolio/     # Portfolio pages
├── images/            # Project images
└── styles.css         # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Kolya-YA/cv-portfolio.plus360.git
cd cv-portfolio.plus360
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

## 🎨 Customization

### Adding New Portfolio Projects

1. Create a new markdown file in `src/content/portfolio/`

2. Add the required frontmatter:

```markdown
---
title: "Project Title"
description: "Project description"
tags: 
    - Technology1
    - Technology2
links:
    github: 'https://github.com/username/repo'
    preview: 'https://project-url.com'
gallery:
    - file: 'project-image.png'
      alt: 'Image description'
---

Project content here...
```

3. Add project images to `src/images/`

### Updating Personal Information

Edit the content in:

- `src/content/home/homepage.md` - Homepage content and professional summary
- `src/layouts/PrimaryLayout.astro` - Site title and meta information

### Styling

Global styles are in `src/styles.css`. Component-specific styles are included in their respective `.astro` files.

## 🌐 Deployment

The site is configured for deployment to:

- **Production URL**: <https://portfolio.plus360.eu/>
- **Build Command**: `npm run build`
- **Output Directory**: `dist/`

### Deploy to Netlify/Vercel

1. Connect your repository to your hosting platform
2. Set build command to `npm run build`
3. Set publish directory to `dist`
4. Deploy!

## 📊 SEO & Performance

- Automatic sitemap generation
- Optimized meta tags and descriptions
- Fast loading with minimal JavaScript
- Mobile-responsive design
- Accessible markup and navigation

## 🔧 Content Management

The project supports TinaCMS for content management. Access the admin panel at `/admin` after deployment.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

### Nikolay Kolomyytsev

- Portfolio: [https://portfolio.plus360.eu/](https://portfolio.plus360.eu/)
- GitHub: [@Kolya-YA](https://github.com/Kolya-YA)

## 🤝 Contributing

Feel free to fork this project and adapt it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

---

Built with ❤️ using Astro
