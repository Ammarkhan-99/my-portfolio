# Quick Formspree Setup (5 Minutes)

## Step 1: Sign Up
1. Go to: https://formspree.io/
2. Click "Get Started for Free"
3. Sign up with your email (ammaroofficial99@gmail.com)

## Step 2: Create Form
1. After login, click "New Form" button
2. Form Settings:
   - **Form Name**: Portfolio Contact
   - **Email Address**: ammaroofficial99@gmail.com
   - Click "Create Form"

## Step 3: Get Your Form ID
1. After creating form, you'll see a page with:
   - Form endpoint URL: `https://formspree.io/f/XXXXXX`
   - The `XXXXXX` part is your Form ID
   - Example: If URL is `https://formspree.io/f/xvgkpqyz`, then `xvgkpqyz` is your Form ID

## Step 4: Update Code
1. Open `static/js/script.js` file
2. Find line 96: `const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';`
3. Replace `YOUR_FORM_ID` with your actual Form ID
4. Example: `const formspreeEndpoint = 'https://formspree.io/f/xvgkpqyz';`

## Step 5: Test
1. Save the file
2. Refresh your browser (localhost:5000)
3. Fill the form and submit
4. Check your email inbox for the message!

## Step 6: Push to GitHub
After it works locally:
```bash
git add static/js/script.js
git commit -m "Add Formspree form ID"
git push origin main
```

---

**Note:** Free plan allows 50 submissions per month - perfect for portfolio website!

