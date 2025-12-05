# 🚀 Portfolio Deployment Guide

Complete step-by-step instructions to deploy your portfolio to production.

## 📋 Pre-Deployment Checklist

- [ ] All personal details are correct
- [ ] Project links are working
- [ ] Social media links are updated
- [ ] No console errors in development
- [ ] Website is responsive on mobile
- [ ] All animations are smooth

## 1️⃣ LOCAL SETUP

### Step 1: Install Dependencies

```bash
cd ali-hossen-shuvo-portfolio
npm install
```

### Step 2: Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000` and verify everything works.

### Step 3: Build for Production

```bash
npm run build
```

This creates an optimized `dist` folder.

### Step 4: Preview Production Build

```bash
npm run preview
```

## 2️⃣ DEPLOY TO VERCEL (RECOMMENDED)

Vercel is optimized for Vite projects and offers free hosting.

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ali-hossen-shuvo-portfolio.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Click "Sign up" or "Log in"
3. Click "New Project"
4. Import your GitHub repository
5. Select "ali-hossen-shuvo-portfolio"
6. Vercel will auto-detect Vite settings
7. Click "Deploy"

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to "Settings"
2. Go to "Domains"
3. Add your custom domain
4. Follow DNS setup instructions

---

## 3️⃣ DEPLOY TO NETLIFY

Alternative hosting platform with great free tier.

### Step 1: Connect GitHub

1. Go to [https://netlify.com](https://netlify.com)
2. Click "Sign up with GitHub"
3. Authorize Netlify to access your repositories

### Step 2: Create New Site

1. Click "Add new site" → "Import an existing project"
2. Select GitHub as provider
3. Choose "ali-hossen-shuvo-portfolio" repo
4. Configure settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Step 3: Configure Domain

1. In Netlify dashboard, go to "Site settings"
2. Go to "Domain management"
3. Add custom domain
4. Update DNS records as instructed

---

## 4️⃣ DEPLOY TO GITHUB PAGES

Free hosting directly from GitHub.

### Step 1: Update Vite Config

Edit `vite.config.js`:

```javascript
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/ali-hossen-shuvo-portfolio/',  // Your repo name
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
```

### Step 2: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 3: Update package.json

Add these scripts:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "npm run build && npx gh-pages -d dist"
}
```

### Step 4: Deploy

```bash
npm run deploy
```

### Step 5: Enable GitHub Pages

1. Go to repository Settings
2. Scroll to "GitHub Pages"
3. Select "gh-pages" as source branch
4. Your site will be at: `https://YOUR_USERNAME.github.io/ali-hossen-shuvo-portfolio/`

---

## 5️⃣ DEPLOY TO CUSTOM SERVER

### Using SSH/SFTP

1. Build the project:
```bash
npm run build
```

2. Upload `dist` folder to your server:
```bash
scp -r dist/* user@yourserver.com:/path/to/public_html/
```

3. Configure server to serve `index.html` for all routes

### Using Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:

```bash
docker build -t portfolio .
docker run -p 80:80 portfolio
```

---

## 6️⃣ POST-DEPLOYMENT TASKS

### Update Your Resume Link

In `Contact.jsx`, add your resume link:

```javascript
<motion.a
  href="https://your-resume-url.com/resume.pdf"
  whileHover={{ scale: 1.05 }}
  className="inline-block px-8 py-3 bg-gray-800 hover:bg-gray-700 text-primary border border-primary rounded-lg transition-all font-semibold"
>
  📄 Download Resume
</motion.a>
```

### Add Google Analytics

Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Test Deployment

- [ ] Click all social links
- [ ] Test email links
- [ ] Verify WhatsApp link works
- [ ] Check project demo links
- [ ] Test on mobile devices
- [ ] Check page speed on Lighthouse

### Monitor Site

- Use Google Analytics for traffic
- Monitor uptime with UptimeRobot
- Check error logs regularly

---

## 🔧 ENVIRONMENT VARIABLES

If needed, create `.env` file:

```env
VITE_GITHUB_URL=https://github.com/alwaysshuvo
VITE_LINKEDIN_URL=https://www.linkedin.com/in/ali-hossen-shuvo
VITE_EMAIL=alihossenshuvo@gmail.com
```

Update components to use:

```javascript
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
```

---

## 🐛 TROUBLESHOOTING

### Build Fails

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading

- Use absolute paths in production
- Ensure images are in `public` folder
- Check image paths in deployment environment

### Links Not Working

- Verify all URLs are correct
- Use absolute URLs for external links
- Test each link after deployment

### Performance Issues

```bash
# Analyze bundle
npm run build
```

Check `dist` folder size. If large:
- Remove unused dependencies
- Use code splitting
- Optimize images

---

## 📊 PERFORMANCE OPTIMIZATION

After deployment, test with:

- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [PageSpeed Insights](https://pagespeed.web.dev)
- [WebPageTest](https://www.webpagetest.org)

### Current Optimizations

✅ Code splitting with Vite
✅ Minified CSS with TailwindCSS
✅ Lazy animation loading
✅ Optimized bundle size

### Further Improvements

- Add image optimization
- Implement service worker for PWA
- Use dynamic imports for heavy components
- Compress fonts

---

## 🎯 FINAL CHECKLIST

- [ ] Site deployed and live
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] All links working
- [ ] Mobile responsive confirmed
- [ ] Analytics configured
- [ ] Contact forms tested
- [ ] Performance optimized

---

## 📞 SUPPORT LINKS

- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Docs](https://pages.github.com)
- [Vite Docs](https://vitejs.dev)

---

## 🎉 YOU'RE LIVE!

Congratulations! Your portfolio is now live and ready to impress potential employers and clients.

**Next Steps:**
1. Share your portfolio on social media
2. Add it to your resume
3. Share with your network
4. Keep it updated with new projects

Good luck! 🚀
