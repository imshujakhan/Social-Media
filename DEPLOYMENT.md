# Deploy Your Social Media App Live 🚀

## Option 1: Vercel + Render (RECOMMENDED - FREE)

### Frontend on Vercel (Free)
### Backend on Render (Free)

---

## 🎯 Step-by-Step Deployment

### Part A: Deploy Backend (JSON Server) on Render

#### 1. Create Backend Package
Create `server.cjs` in project root:
```javascript
const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(cors({ origin: '*', credentials: true }));
server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
```

#### 2. Update package.json
Add to scripts:
```json
"scripts": {
  "start": "node server.cjs",
  "dev": "vite",
  "api": "json-server --watch db.json --port 3001",
  "dev:all": "concurrently \"npm run api\" \"npm run dev\"",
  "build": "vite build"
}
```

Add to dependencies:
```json
"dependencies": {
  "json-server": "^0.17.4"
}
```

#### 3. Create GitHub Repository
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

#### 4. Deploy on Render
1. Go to https://render.com
2. Sign up (free)
3. Click "New +" → "Web Service"
4. Connect your GitHub repo
5. Settings:
   - Name: `social-media-api`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Click "Create Web Service"
7. Copy your API URL (e.g., `https://social-media-api.onrender.com`)

---

### Part B: Deploy Frontend on Vercel

#### 1. Update API URL
Edit `src/config/api.js`:
```javascript
export const API_BASE_URL = "https://YOUR-API-URL.onrender.com";
```

#### 2. Build the Project
```bash
npm run build
```

#### 3. Deploy on Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? social-media
# - Directory? ./
# - Override settings? No
```

#### 4. Your App is Live! 🎉
Vercel will give you a URL like: `https://social-media-xyz.vercel.app`

---

## Option 2: Netlify + Render (Alternative)

### Frontend on Netlify

#### 1. Build
```bash
npm run build
```

#### 2. Deploy
1. Go to https://netlify.com
2. Drag & drop the `dist` folder
3. Done!

---

## Option 3: GitHub Pages (Frontend Only)

### For Static Demo (No Backend)

#### 1. Install gh-pages
```bash
npm install --save-dev gh-pages
```

#### 2. Update package.json
```json
"homepage": "https://YOUR-USERNAME.github.io/social-media",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

#### 3. Update vite.config.js
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/social-media/'
})
```

#### 4. Deploy
```bash
npm run deploy
```

---

## 🔧 Important Configuration

### CORS Setup for Backend

Add to `server.js`:
```javascript
const cors = require('cors');
server.use(cors({
  origin: '*', // Or your Vercel URL
  credentials: true
}));
```

Install cors:
```bash
npm install cors
```

---

## 📋 Deployment Checklist

### Before Deploying:
- [ ] Update API URL in `src/config/api.js`
- [ ] Test build locally: `npm run build`
- [ ] Create GitHub repository
- [ ] Add `.gitignore` (node_modules, dist, .env)
- [ ] Commit all changes

### Backend (Render):
- [ ] Create `server.cjs`
- [ ] Update `package.json` scripts
- [ ] Add `json-server` and `cors` to dependencies
- [ ] Push to GitHub
- [ ] Deploy on Render
- [ ] Copy API URL

### Frontend (Vercel):
- [ ] Update API URL with Render URL
- [ ] Build project
- [ ] Deploy on Vercel
- [ ] Test live app

---

## 🌐 Your Live URLs

After deployment:
- **Frontend**: `https://your-app.vercel.app`
- **Backend**: `https://your-api.onrender.com`

---

## 💡 Tips

### Free Tier Limitations:
- **Render**: API sleeps after 15 min inactivity (wakes on request)
- **Vercel**: Unlimited bandwidth for personal projects
- **Both**: 100% free for hobby projects

### Keep API Awake:
Use a service like UptimeRobot to ping your API every 5 minutes.

### Custom Domain:
Both Vercel and Render support custom domains for free!

---

## 🆘 Troubleshooting

**API not responding?**
- Check Render logs
- Verify CORS is enabled
- Wait 30 seconds (cold start)

**Build fails?**
- Run `npm run build` locally first
- Check for errors
- Verify all dependencies in package.json

**CORS errors?**
- Add cors middleware to server.js
- Update API URL in frontend

---

## 🎉 You're Live!

Share your app:
```
Frontend: https://your-app.vercel.app
Login: john@test.com / 123456
```

**Congratulations! Your social media app is now live on the internet!** 🚀
