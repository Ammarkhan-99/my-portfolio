# EmailJS Setup - Gmail Email Sending

## Quick Setup (10 minutes)

### Step 1: Sign Up
1. Go to: https://www.emailjs.com/
2. Click "Sign Up Free"
3. Create account with your email

### Step 2: Add Gmail Service
1. Dashboard → "Email Services" → "Add New Service"
2. Select "Gmail"
3. Click "Connect Account"
4. Login with: `ammaroofficial99@gmail.com`
5. Click "Create Service"
6. **Copy your Service ID** (looks like: `service_xxxxxxx`)

### Step 3: Create Email Template
1. Dashboard → "Email Templates" → "Create New Template"
2. Template Settings:
   - **Template Name**: Portfolio Contact
   - **Subject**: `Portfolio Contact Form - Message from {{from_name}}`
   - **Content**:
   ```
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   
   ---
   This message was sent from your portfolio website contact form.
   ```
3. Click "Save"
4. **Copy your Template ID** (looks like: `template_xxxxxxx`)

### Step 4: Get Public Key
1. Dashboard → "Account" → "General"
2. **Copy your Public Key** (looks like: `xxxxxxxxxxxxx`)

### Step 5: Update Code
1. Open `static/js/script.js`
2. Find these lines and replace:
   - Line ~95: `emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");` → Add your Public Key
   - Line ~129: `'YOUR_SERVICE_ID'` → Add your Service ID
   - Line ~130: `'YOUR_TEMPLATE_ID'` → Add your Template ID
   - Line ~131: `'YOUR_EMAILJS_PUBLIC_KEY'` → Add your Public Key again

### Example:
```javascript
emailjs.init("abcdefghijklmnop"); // Your Public Key

await emailjs.send(
    'service_portfolio',      // Your Service ID
    'template_portfolio',     // Your Template ID
    templateParams,
    'abcdefghijklmnop'        // Your Public Key
);
```

### Step 6: Test
1. Refresh your website
2. Fill and submit the form
3. Check your email inbox!

---

**Note:** 
- EmailJS free plan: 200 emails/month
- Gmail App Password NOT needed - EmailJS handles it!
- Works on GitHub Pages (static hosting)

