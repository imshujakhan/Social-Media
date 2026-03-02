# Deploy in 10 Minutes ⚡

## Quick Deployment Steps

### 1️⃣ Install Dependencies (1 min)
```bash
npm install
```

### 2️⃣ Create GitHub Repo (2 min)
```bash
git init
git add .
git commit -m "Ready to deploy"
git branch -M main
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

### 3️⃣ Deploy Backend on Render (3 min)
1. Go to https://render.com → Sign up
2. New + → Web Service
3. Connect GitHub repo
4. Settings:
   - Build: `npm install`
   - Start: `npm start`
5. Create → Copy API URL

### 4️⃣ Update Frontend (1 min)
Edit `src/config/api.js`:
```javascript
export const API_BASE_URL = "https://YOUR-API.onrender.com";
```

### 5️⃣ Deploy Frontend on Vercel (3 min)
```bash
npm install -g vercel
vercel
```
Follow prompts → Done!

## 🎉 Your App is Live!

**Frontend**: https://your-app.vercel.app
**Backend**: https://your-api.onrender.com

**Login**: john@test.com / 123456

---

## 📝 Files Ready for Deployment

✅ server.js - Backend server
✅ package.json - Updated with dependencies
✅ db.json - Database
✅ All source code

## 🚀 Alternative: One-Click Deploy

### Vercel (Frontend + Backend)
1. Push to GitHub
2. Import on Vercel
3. Done!

### Netlify
1. Drag & drop `dist` folder
2. Done!

---

**Need help? Check DEPLOYMENT.md for detailed guide**
