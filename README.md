# Ali Hossen Shuvo - Portfolio Website

A modern, fully responsive portfolio website for a Junior Full Stack Developer (MERN). Built with React, Vite, and TailwindCSS with smooth animations powered by Framer Motion.

## 🚀 Features

- ✨ **Modern Hero Section** with animated gradient background
- 📱 **Fully Responsive Design** - works perfectly on all devices
- 🎨 **Beautiful Gradient UI** with smooth animations
- 📂 **Project Showcase** - display your best projects with live links
- 💼 **About Section** - professional introduction
- 🛠️ **Skills Display** - organized by Frontend, Backend, and Tools
- 📧 **Contact Integration** - direct email, WhatsApp, and social links
- 🚀 **Deployment Ready** - optimized for Vercel/Netlify
- 🔄 **Smooth Animations** - Framer Motion for delightful interactions

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.2.0
- **Build Tool:** Vite 5.0.0
- **Styling:** TailwindCSS 3.3.6
- **Animations:** Framer Motion 10.16.4
- **CSS Processing:** PostCSS & Autoprefixer

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The portfolio will open automatically at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

### 4. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
ali-hossen-shuvo-portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Navigation bar
│   │   ├── Hero.jsx            # Hero section with intro
│   │   ├── About.jsx           # About me section
│   │   ├── Skills.jsx          # Technical skills
│   │   ├── Projects.jsx        # Project showcase
│   │   └── Contact.jsx         # Contact section
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # TailwindCSS configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🎨 Customization

### Update Personal Information

Edit the following files to add your details:

1. **Hero Section** - `src/components/Hero.jsx`
   - Name and title
   - Social links
   - Profile image placeholder

2. **About Section** - `src/components/About.jsx`
   - Bio and description
   - Contact details

3. **Skills Section** - `src/components/Skills.jsx`
   - Add your technical skills
   - Modify skill categories

4. **Projects Section** - `src/components/Projects.jsx`
   - Add your projects with details
   - Update project links

5. **Contact Section** - `src/components/Contact.jsx`
   - Email address
   - Phone number
   - Social media links

### Colors & Theme

Modify `tailwind.config.js` to change colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#667eea',
      secondary: '#764ba2',
    },
  },
},
```

## 📤 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Click "New Project" and select your repository
4. Vercel will automatically detect Vite and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Set build command: `npm run build`
6. Set publish directory: `dist`

### Deploy to GitHub Pages

Update `vite.config.js`:

```javascript
export default defineConfig({
  base: '/repository-name/',
  // ... rest of config
})
```

Then build and deploy:

```bash
npm run build
npx gh-pages -d dist
```

## 📝 Personal Details Used

- **Name:** Ali Hossen Shuvo
- **Title:** Junior Full Stack Developer (MERN)
- **Email:** alihossenshuvo@gmail.com
- **WhatsApp:** +8801678606028
- **Location:** Uttara, Dhaka, Bangladesh
- **GitHub:** https://github.com/alwaysshuvo
- **LinkedIn:** https://www.linkedin.com/in/ali-hossen-shuvo

### Projects Featured

1. **ProductHub** - E-commerce Platform
   - Live: https://product-hub-simplify-your-product-m.vercel.app/
   - Repo: https://github.com/alwaysshuvo/ProductHub-Simplify-Your-Product-Management

2. **MovieMaster Pro** - Movie Watchlist App
   - Live: https://movie-matrix10.netlify.app/
   - Repo: https://github.com/alwaysshuvo/moviemaster-pro

3. **Warmpaws** - Pet Care Service
   - Live: https://warpaws-pet-care.netlify.app/
   - Repo: https://github.com/alwaysshuvo/Warmpows-Winter-Pet-Care-Service

## 🎯 Performance Optimizations

- Code splitting with Vite
- Image optimization placeholders
- Lazy loading animations
- Efficient CSS with TailwindCSS
- Minified production build

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize it for your own use!

## 📄 License

This project is open source and available under the MIT License.

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [TailwindCSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)

## 💡 Tips

- Update social links in Hero section regularly
- Keep projects section current with latest work
- Test responsive design on multiple devices
- Optimize images before deployment
- Regularly update skills and projects

## ✨ Future Enhancements

Consider adding:
- Blog section
- Testimonials from clients/colleagues
- Dark/Light theme toggle
- Multi-language support
- Contact form with backend integration
- Animation on scroll effects

---

**Built with ❤️ by Ali Hossen Shuvo**

For more information, visit: https://github.com/alwaysshuvo
