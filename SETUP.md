# 🔧 Environment Setup

Complete setup instructions for different operating systems.

## ✅ System Requirements

- **Node.js:** v16.0.0 or higher
- **npm:** v7.0.0 or higher (comes with Node.js)
- **Disk Space:** ~500MB
- **RAM:** 2GB minimum

Check your versions:
```bash
node --version
npm --version
```

---

## 🪟 Windows Setup

### Step 1: Install Node.js

1. Visit [nodejs.org](https://nodejs.org)
2. Download LTS version
3. Run installer (.msi file)
4. Follow installation wizard
5. Check "Add to PATH"
6. Finish installation

### Step 2: Verify Installation

Open PowerShell and run:
```powershell
node --version
npm --version
```

Should show version numbers like:
```
v18.17.0
9.6.7
```

### Step 3: Setup Project

```powershell
cd "C:\My Projects\Portfolio\ali-hossen-shuvo-portfolio"
npm install
npm run dev
```

Your portfolio opens at `http://localhost:3000`

---

## 🍎 macOS Setup

### Step 1: Install Node.js

**Option A: Using Homebrew (Recommended)**

```bash
# Install Homebrew if not already installed
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node
```

**Option B: Direct Download**

1. Visit [nodejs.org](https://nodejs.org)
2. Download LTS for macOS
3. Run installer
4. Follow instructions

### Step 2: Verify Installation

```bash
node --version
npm --version
```

### Step 3: Setup Project

```bash
cd ~/Projects/ali-hossen-shuvo-portfolio
npm install
npm run dev
```

---

## 🐧 Linux Setup

### Ubuntu/Debian

```bash
# Update package manager
sudo apt update

# Install Node.js and npm
sudo apt install nodejs npm -y

# Verify installation
node --version
npm --version

# Navigate to project
cd ~/Projects/ali-hossen-shuvo-portfolio

# Install dependencies
npm install

# Start development
npm run dev
```

### Using NVM (Recommended)

```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reload shell config
source ~/.bashrc

# Install Node.js LTS
nvm install --lts

# Use Node.js
nvm use --lts

# Verify
node --version
```

---

## 📦 Troubleshooting Installation

### Issue: npm command not found

**Solution:** Node.js not added to PATH

**Windows:**
1. Right-click "This PC"
2. Click "Properties"
3. Click "Advanced system settings"
4. Click "Environment Variables"
5. Check if Node.js path is in PATH
6. Restart terminal

**Mac/Linux:**
```bash
# Check if node_modules/.bin is in PATH
echo $PATH

# If not, add to shell config (~/.bashrc, ~/.zshrc)
export PATH="$PATH:$HOME/.npm/_npx"
```

### Issue: Permission denied

**Linux/Mac Solution:**
```bash
# Fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH="$HOME/.npm-global/bin:$PATH"
source ~/.bashrc
```

### Issue: Port 3000 already in use

**Solution:** Change port in `vite.config.js`

```javascript
server: {
  port: 3001,  // Change 3000 to any available port
  open: true
}
```

### Issue: npm install fails

**Solutions:**

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install

# Or use yarn as alternative
npm install -g yarn
yarn install
```

---

## 🔄 Updating Node.js

### Windows

1. Download latest from [nodejs.org](https://nodejs.org)
2. Run installer (it updates automatically)
3. Restart terminal

### macOS

```bash
# Using Homebrew
brew upgrade node

# Or using NVM
nvm install --lts
nvm use --lts
```

### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt upgrade nodejs npm -y
```

---

## 🛠️ Essential Commands

### Project Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Clear cache and reinstall
npm clean-install
```

### Useful npm Commands

```bash
# List installed packages
npm list

# Check for outdated packages
npm outdated

# Update packages
npm update

# Remove unused packages
npm prune
```

---

## 📝 Git Setup (For GitHub)

### Windows/macOS/Linux

```bash
# Install Git
# Windows: Download from https://git-scm.com/download/win
# macOS: brew install git
# Linux: sudo apt install git

# Configure Git
git config --global user.name "Ali Hossen Shuvo"
git config --global user.email "alihossenshuvo@gmail.com"

# Verify configuration
git config --list
```

### Initialize Repository

```bash
cd ali-hossen-shuvo-portfolio
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main

# Add remote (after creating repo on GitHub)
git remote add origin https://github.com/alwaysshuvo/ali-hossen-shuvo-portfolio.git
git push -u origin main
```

---

## 🌐 VS Code Setup (Recommended)

### Installation

1. Download from [code.visualstudio.com](https://code.visualstudio.com)
2. Install for your OS
3. Launch VS Code

### Recommended Extensions

```bash
# Install extensions via terminal
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension bradlc.vscode-tailwindcss
code --install-extension mgmcdermott.vscode-language-babel
code --install-extension naumovs.color-highlight
```

Or install via Extensions panel:
1. Click Extensions (Ctrl+Shift+X)
2. Search for each extension
3. Click "Install"

### Useful VS Code Shortcuts

```
Ctrl+Shift+P  - Command palette
Ctrl+F        - Find
Ctrl+H        - Find and replace
Ctrl+/        - Toggle comment
Alt+Up/Down   - Move line
Ctrl+Space    - Autocomplete
```

---

## 🐳 Docker Setup (Advanced)

### Install Docker

1. Download [Docker Desktop](https://www.docker.com/products/docker-desktop)
2. Install for your OS
3. Start Docker

### Docker Commands

```bash
# Build Docker image
docker build -t my-portfolio .

# Run container
docker run -p 3000:3000 my-portfolio

# Build and run
docker build -t my-portfolio . && docker run -p 3000:3000 my-portfolio
```

### Docker Compose (Optional)

Create `docker-compose.yml`:

```yaml
version: '3'
services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
    command: npm run dev
```

Run:
```bash
docker-compose up
```

---

## 🔍 Verification Checklist

After setup, verify everything works:

- [ ] Node.js installed: `node -v`
- [ ] npm installed: `npm -v`
- [ ] Git configured: `git config --list`
- [ ] Project dependencies: `npm install` (no errors)
- [ ] Dev server running: `npm run dev`
- [ ] Portfolio opens at localhost:3000
- [ ] No console errors
- [ ] All links clickable
- [ ] Mobile view responsive

---

## 🆘 Common Issues

### Issue: "npm ERR! ERESOLVE unable to resolve dependency"

**Solution:**
```bash
# Use legacy peer deps flag
npm install --legacy-peer-deps

# Or use npm 7 flag
npm install --force
```

### Issue: Port 3000 conflicts

**Solution:**
```bash
# Find what's using port 3000
# Windows
netstat -ano | findstr :3000

# Mac/Linux
lsof -i :3000

# Kill process (Windows)
taskkill /PID <PID> /F

# Kill process (Mac/Linux)
kill -9 <PID>
```

### Issue: Module not found

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

---

## 📚 Learning Resources

- [Node.js Docs](https://nodejs.org/docs/)
- [npm Documentation](https://docs.npmjs.com/)
- [Git Documentation](https://git-scm.com/doc)
- [Docker Docs](https://docs.docker.com/)

---

## ✅ You're Ready!

Once setup is complete:

1. Read `QUICK_START.md` for next steps
2. Customize your portfolio
3. Deploy when ready

Happy coding! 🚀

---

**Setup Guide for Ali Hossen Shuvo's Portfolio**
