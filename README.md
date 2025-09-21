# Solar Drmcxl Website

A modern, responsive website for Solar Drmcxl - a solar and inverter solutions company. Built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React icons.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Vite for optimal performance
- **Animations**: Smooth page transitions and scroll animations with Framer Motion
- **SEO Friendly**: Structured for search engine optimization
- **Contact Integration**: WhatsApp and phone integration for easy customer contact

## Pages

1. **Home**: Hero section, services overview, testimonials, and contact CTA
2. **Services**: Detailed service descriptions and features
3. **About**: Company story, mission, and statistics
4. **Projects**: Portfolio of completed projects
5. **Contact**: Contact form and business information

## Tech Stack

- **React 19**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **React Router**: Client-side routing
- **Lucide React**: Beautiful icon library

## Installation

1. Navigate to the project directory:

   ```bash
   cd "c:\Users\fanya\Documents\New folder (2)\Solar Drmcxl\drmxcl"
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── ServicesOverview.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Testimonials.jsx
│   │   └── ContactCTA.jsx
│   └── ui/
│       └── Button.jsx
├── pages/
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── Projects.jsx
├── hooks/
│   └── useScrollAnimation.js
├── utils/
│   └── constants.js
├── assets/
│   └── images/
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

### Adding Images

**IMPORTANT**: The website is designed to use actual photos of solar installations, inverters, and engineers working. Currently, it shows placeholder images.

To add real images:

1. Read the `IMAGE_GUIDE.md` file for detailed requirements
2. Add images to the appropriate folders in `src/assets/images/`
3. Images will automatically replace placeholders when added

**Required Image Folders**:

- `src/assets/images/hero/` - Hero section images
- `src/assets/images/services/` - Service-related photos
- `src/assets/images/projects/` - Project portfolio photos
- `src/assets/images/about/` - Team and company photos

### Contact Information

Update contact details in `src/utils/constants.js`:

- Phone number
- Email address
- WhatsApp link
- Business address

### Colors and Styling

The website uses a green and blue color scheme. You can customize colors in `src/index.css`:

- Primary green: `#27ae60`
- Secondary yellow: `#f1c40f`
- Blue gradient: `#1e3a8a` to `#3b82f6`

### Content

- Update company information in the About page
- Add real project images and details in the Projects page
- Customize service descriptions in the Services page
- Update testimonials with real customer feedback

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for React Router (create `_redirects` file in `public` folder with `/* /index.html 200`)

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## Features to Add

- [ ] Blog section for SEO
- [ ] Image gallery for projects
- [ ] Customer testimonials with photos
- [ ] Service booking system
- [ ] Live chat integration
- [ ] Google Maps integration
- [ ] Performance analytics

## Support

For support or questions about this website, contact the development team.

## License

This project is proprietary software for Solar Drmcxl.
