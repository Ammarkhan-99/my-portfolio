# Email Setup Instructions

## ✅ Code Setup Complete

Email functionality successfully added to your portfolio! 

## ⚠️ Important: Gmail App Password Required

Gmail ke liye email bhejne ke liye aapko **App Password** use karna hoga, normal password nahi.

### Steps to Generate Gmail App Password:

1. **Google Account Settings mein jao:**
   - https://myaccount.google.com/ par jao
   - Security section mein jao

2. **2-Step Verification enable karo** (agar already enabled nahi hai):
   - Security → 2-Step Verification
   - Enable karo

3. **App Password generate karo:**
   - Security section mein
   - "App passwords" ya "2-Step Verification" ke andar
   - "Select app" → "Mail" choose karo
   - "Select device" → "Other (Custom name)" → "Portfolio" type karo
   - "Generate" button par click karo
   - 16-digit password mil jayega (spaces ke bina)

4. **Environment Variable Set Karo:**

   **Windows PowerShell mein:**
   ```powershell
   $env:MAIL_PASSWORD="your-16-digit-app-password-here"
   python app.py
   ```

   **Ya permanently set karo:**
   ```powershell
   [System.Environment]::SetEnvironmentVariable('MAIL_PASSWORD', 'your-16-digit-app-password', 'User')
   ```

   **Ya app.py mein directly set karo (temporary - less secure):**
   ```python
   app.config['MAIL_PASSWORD'] = 'your-16-digit-app-password-here'
   ```

## 📧 How It Works

1. User contact form fill karega
2. Form submit hoga
3. Email automatically **ammaroofficial99@gmail.com** par jayega
4. Email mein user ka name, email, aur message hoga

## 🔧 Testing

1. Flask app run karo
2. Browser mein http://localhost:5000 par jao
3. Contact section mein test message send karo
4. aapki email (ammaroofficial99@gmail.com) par check karo

## ⚡ Quick Start

Agar aap abhi test karna chahte hain, app.py file mein line 12 ko update karo:

```python
app.config['MAIL_PASSWORD'] = 'your-app-password-here'  # Directly set kar do
```

Phir app restart karo aur test karo!

