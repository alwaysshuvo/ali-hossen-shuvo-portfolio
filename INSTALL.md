# 🚀 INSTALLATION INSTRUCTIONS

Quick installation guide to get your portfolio running in minutes.

---

## ⚡ SUPER QUICK START (3 Steps)

### Step 1: Open Terminal
- **Windows:** Press `Win + R`, type `powershell`, press Enter
- **Mac:** Press `Cmd + Space`, type `terminal`, press Enter
- **Linux:** Open terminal application

### Step 2: Navigate to Project
```bash
cd c:\My\ Projects\Portfolio\ali-hossen-shuvo-portfolio
```

(Or navigate to your project folder)

### Step 3: Install & Run
```bash
npm install
npm run dev
```

**Done!** Your portfolio opens automatically at `http://localhost:3000`

---

## ✅ SYSTEM CHECK

Before starting, verify you have:

```bash
# Check Node.js
node --version
# Should show v16.0.0 or higher

# Check npm
npm --version
# Should show v7.0.0 or higher
```

If you don't have them, see the **Installation Guide** below.

---

## 📥 INSTALLATION GUIDE

### Windows

**Step 1: Download Node.js**
1. Visit https://nodejs.org
2. Click "LTS" version (Recommended)
3. Click "Download"

**Step 2: Install Node.js**
1. Run the installer (.msi file)
2. Click "Next" through all screens
3. ✅ Check "Add to PATH"
4. Click "Install"
5. Click "Finish"

**Step 3: Verify Installation**
```powershell
node --version
npm --version
```

Should show version numbers (e.g., v18.0.0, 9.0.0)

**Step 4: Your Portfolio**
```powershell
cd "C:\My Projects\Portfolio\ali-hossen-shuvo-portfolio"
npm install
npm run dev
```

### macOS

**Step 1: Install Homebrew (if not installed)**
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Step 2: Install Node.js**
```bash
brew install node
```

**Step 3: Verify Installation**
```bash
node --version
npm --version
```

**Step 4: Your Portfolio**
```bash
cd ~/Projects/ali-hossen-shuvo-portfolio
npm install
npm run dev
```

### Linux (Ubuntu/Debian)

**Step 1: Update System**
```bash
sudo apt update
sudo apt upgrade -y
```

**Step 2: Install Node.js**
```bash
sudo apt install nodejs npm -y
```

**Step 3: Verify Installation**
```bash
node --version
npm --version
```

**Step 4: Your Portfolio**
```bash
cd ~/Projects/ali-hossen-shuvo-portfolio
npm install
npm run dev
```

---

## 🔧 TROUBLESHOOTING

### "npm: command not found"

**Cause:** Node.js not installed or not in PATH

**Solution:**
1. Install Node.js from https://nodejs.org
2. Restart terminal after installation
3. Try again

### "EACCES: permission denied"

**Cause:** Permission issue (Mac/Linux)

**Solution:**
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH="$PATH:$HOME/.npm-global/bin"
source ~/.bashrc
```

### "npm install fails"

**Solution:**
```bash
# Clear cache
npm cache clean --force

# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
```

### "Port 3000 already in use"

**Solution:**
Edit `vite.config.js` and change:
```javascript
port: 3000,    // Change to 3001, 3002, etc.
```

### "Module not found"

**Solution:**
```bash
npm install
npm run dev
```

---

## ⏱️ TIMING BREAKDOWN

| Task | Time |
|------|------|
| Download Node.js | 3 min |
| Install Node.js | 5 min |
| npm install | 2 min |
| npm run dev | 1 min |
| **Total** | **~11 min** |

---

## 🎯 WHAT HAPPENS WHEN YOU RUN

```bash
npm run dev
```

1. Vite dev server starts
2. Browser opens automatically
3. Page loads at http://localhost:3000
4. You see your portfolio
5. Changes update live (hot reload)

To stop: Press `Ctrl + C` in terminal

---

## 🔄 COMMON COMMANDS

```bash
# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Stop server
Ctrl + C

# Update packages
npm update

# Install a new package
npm install package-name
```

---

## 📱 ACCESSING YOUR PORTFOLIO

Once `npm run dev` is running:

| Method | URL |
|--------|-----|
| Local Computer | http://localhost:3000 |
| From QR Code | Scan QR in terminal |
| Mobile on Same Network | http://YOUR_IP:3000 |

---

## ✨ WHAT YOU'LL SEE

When portfolio loads:
✅ Dark gradient background
✅ Your name and title
✅ Navigation menu
✅ All sections (About, Skills, Projects)
✅ Contact information
✅ Smooth animations

---

## 🛠️ DEVELOPMENT WORKFLOW

1. **Start Server**
   ```bash
   npm run dev
   ```

2. **Edit Files**
   - Make changes in `src/components/`
   - Changes appear instantly (hot reload)

3. **Stop Server**
   - Press `Ctrl + C`

4. **Build for Production**
   ```bash
   npm run build
   ```

5. **Deploy** (See DEPLOYMENT.md)

---

## 🌐 GIT SETUP (For GitHub)

After installation:

```bash
# Configure Git
git config --global user.name "Ali Hossen Shuvo"
git config --global user.email "alihossenshuvo@gmail.com"

# Initialize repository
git init
git add .
git commit -m "Initial commit: Portfolio website"

# Create repo on GitHub first, then:
git remote add origin https://github.com/alwaysshuvo/ali-hossen-shuvo-portfolio.git
git branch -M main
git push -u origin main
```

---

## 💾 FOLDER STRUCTURE AFTER INSTALL

```
ali-hossen-shuvo-portfolio/
├── node_modules/          (Created by npm install)
├── src/                   (Your code)
├── dist/                  (Created by npm build)
├── package.json
├── vite.config.js
└── ... other files
```

---

## ✅ VERIFICATION CHECKLIST

After installation:
- [ ] Node.js installed
- [ ] npm installed
- [ ] Project folder has `node_modules`
- [ ] `npm run dev` works
- [ ] Browser opens at localhost:3000
- [ ] Portfolio displays
- [ ] No console errors
- [ ] Ready to customize

---

## 🎓 NEXT STEPS

After installation runs successfully:

1. **Read Documentation**
   - START_HERE.md
   - QUICK_START.md

2. **Customize**
   - Edit components
   - Add your photo
   - Update text

3. **Test**
   - Check mobile view
   - Test all links
   - Verify content

4. **Deploy** (See DEPLOYMENT.md)
   - Push to GitHub
   - Deploy to Vercel/Netlify

---

## 📞 STILL STUCK?

### Check These:
1. Is Node.js installed? `node --version`
2. Is npm installed? `npm --version`
3. Are you in correct folder?
4. Did you run `npm install`?
5. Did you run `npm run dev`?

### Read These:
1. SETUP.md - Detailed environment setup
2. QUICK_START.md - Quick start guide
3. README.md - Full documentation

---

## 🎉 YOU'RE READY!

Once installation is complete, you have:
✅ Complete portfolio project
✅ All dependencies installed
✅ Development server running
✅ Live portfolio at localhost:3000
✅ Hot reload enabled
✅ Ready to customize

**Now read START_HERE.md!** 🚀

---

## ⚡ SPEED TIPS

- **Faster install:** Use `npm ci` instead of `npm install` (if package-lock.json exists)
- **Faster dev:** Only edit files (no node installation needed)
- **Faster build:** Run `npm run build` for production

---

## 🔒 SECURITY NOTE

Never share:
- Your `.env` file
- Your `node_modules` folder
- Your authentication keys

Always add to `.gitignore` (already included)

---

## 📊 REQUIREMENTS SUMMARY

| Requirement | Minimum | Recommended |
|------------|---------|-------------|
| Node.js | v16 | v18+ |
| npm | v7 | v9+ |
| RAM | 2GB | 4GB+ |
| Disk Space | 500MB | 1GB+ |
| Internet | For install | For deployment |

---

## 🚀 YOU'RE INSTALLED!

Go ahead and run:
```bash
npm install
npm run dev
```

Your portfolio will be live in seconds! ✨

---

**Installation Complete!**

**Next: Read START_HERE.md** 📖
