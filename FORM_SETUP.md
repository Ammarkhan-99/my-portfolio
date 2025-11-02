# Contact Form Setup Instructions

## Option 1: Formspree (Easiest - Recommended)

### Steps:
1. Go to https://formspree.io/
2. Sign up for free account
3. Create a new form
4. Set form endpoint to: `ammaroofficial99@gmail.com`
5. Copy your Form ID (looks like: `xvgkpqyz` or `mqjndwka`)
6. Update `index.html` - replace `YOUR_FORM_ID` with your actual Form ID

### Update in index.html:
Find this line in the script section:
```html
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

Replace `YOUR_FORM_ID` with your actual form ID from Formspree.

---

## Option 2: EmailJS (More Complex)

If you prefer EmailJS:
1. Go to https://www.emailjs.com/
2. Sign up for free account
3. Create a service (Gmail)
4. Create an email template
5. Get your Public Key, Service ID, and Template ID
6. Update the values in `static/js/script.js`

---

## Current Setup:
Right now the form uses Formspree with placeholder. You need to get your Form ID and update it.

After setup, the form will:
- ✅ Remove browser security warning
- ✅ Send emails directly to ammaroofficial99@gmail.com
- ✅ Work on GitHub Pages
- ✅ Show success/error messages

