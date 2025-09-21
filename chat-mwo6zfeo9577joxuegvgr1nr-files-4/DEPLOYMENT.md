# ALFA LEARNING - Vercel Deployment Guide

This guide will help you deploy the ALFA LEARNING website to Vercel successfully.

## 🚀 Quick Deployment Steps

### 1. Prerequisites
- A Vercel account (free at [vercel.com](https://vercel.com))
- Your project files uploaded to a Git repository (GitHub, GitLab, or Bitbucket)
- A Convex account for backend functionality (optional but recommended)

### 2. Environment Variables Setup

#### Required Environment Variables:
```bash
NEXT_PUBLIC_CONVEX_URL=your_convex_deployment_url_here
```

#### How to set up Convex (Optional but recommended for contact forms):

1. **Create a Convex account:**
   - Go to [dashboard.convex.dev](https://dashboard.convex.dev/)
   - Sign up or log in

2. **Create a new project:**
   - Click "Create Project"
   - Connect your Git repository
   - Wait for deployment

3. **Get your deployment URL:**
   - Copy the URL from your Convex dashboard
   - It will look like: `https://your-project-name.convex.cloud`

4. **Add to Vercel environment variables:**
   - In Vercel dashboard → Project Settings → Environment Variables
   - Add: `NEXT_PUBLIC_CONVEX_URL` = `your_convex_url`

### 3. Deploy to Vercel

#### Option A: Import from Git Repository
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your Git repository
3. Configure project:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** Leave empty (auto-detected)
   - **Install Command:** `npm install`

#### Option B: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
cd your-project-directory
vercel

# Follow prompts
```

### 4. Environment Variables in Vercel
1. Go to your project in Vercel dashboard
2. Navigate to Settings → Environment Variables
3. Add the following variables:

| Name | Value | Environment |
|------|-------|-------------|
| `NEXT_PUBLIC_CONVEX_URL` | Your Convex deployment URL | Production, Preview, Development |

### 5. Build Settings (Auto-configured)
Vercel will automatically detect the Next.js configuration. If needed, verify:

- **Build Command:** `npm run build`
- **Output Directory:** (leave empty)
- **Install Command:** `npm install`
- **Development Command:** `npm run dev`

## 🔧 Troubleshooting

### Common Issues and Solutions:

#### 1. Build Fails with TypeScript Errors
**Solution:** The project is configured to ignore TypeScript errors during builds in development. For production, ensure:
- All required dependencies are in `package.json`
- Environment variables are properly set

#### 2. Contact Forms Don't Work
**Symptoms:** Forms submit but nothing happens
**Solution:** 
- Ensure `NEXT_PUBLIC_CONVEX_URL` is set in Vercel environment variables
- Check Convex dashboard for deployment status
- If Convex is not configured, forms will show a fallback message directing users to email

#### 3. Pages Load Slowly on First Visit
**Solution:** This is normal for the contact page due to dynamic imports. Subsequent loads will be faster.

#### 4. Hydration Errors
**Solution:** The ConvexProvider has been updated to prevent hydration mismatches. If issues persist:
- Check browser console for specific errors
- Ensure environment variables are consistent

## 📱 Features Status

### ✅ Working Features:
- ✅ Responsive design
- ✅ Bilingual support (English/Bahasa Indonesia)
- ✅ All pages render correctly
- ✅ Navigation and routing
- ✅ Static content display
- ✅ Language switching

### 🔧 Configurable Features:
- 🔧 Contact forms (requires Convex setup)
- 🔧 Form submissions (requires Convex setup)

## 🌐 Post-Deployment Checklist

After successful deployment:

1. **Test all pages:**
   - [ ] Home page loads correctly
   - [ ] About page displays content
   - [ ] Contact page loads (may take longer first time)
   - [ ] Classes page shows information
   - [ ] Teachers page displays properly

2. **Test functionality:**
   - [ ] Language switcher works
   - [ ] Navigation between pages
   - [ ] Responsive design on mobile
   - [ ] Contact forms (if Convex is configured)

3. **Performance check:**
   - [ ] Page load speeds are acceptable
   - [ ] Images load properly
   - [ ] No console errors in browser

## 🆘 Support

If you encounter issues:

1. **Check Vercel deployment logs:**
   - Go to Vercel dashboard → Project → Functions tab
   - Check build logs for errors

2. **Check browser console:**
   - Open Developer Tools → Console
   - Look for JavaScript errors

3. **Common fixes:**
   - Redeploy the project
   - Clear browser cache
   - Check environment variables

## 📞 Contact Information

For technical support with deployment:
- Check the project's README.md file
- Review Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
- Convex documentation: [docs.convex.dev](https://docs.convex.dev)

---

**Note:** The website will work without Convex configuration, but contact forms will show a fallback message directing users to email directly.