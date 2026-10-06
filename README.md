# Atomic Habits Landing Page

صفحة هبوط لتحميل كتاب Atomic Habits بصيغة PDF.

## التشغيل المحلي

```bash
# تثبيت المكتبات
npm install

# تشغيل السيرفر
npm run dev
```

## النشر على Netlify

### الطريقة الأولى: من خلال Git

1. قم برفع المشروع إلى GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. اذهب إلى [Netlify](https://app.netlify.com)
3. اضغط على "Add new site" > "Import an existing project"
4. اختر GitHub وحدد المستودع
5. Netlify ستكتشف الإعدادات تلقائياً من ملف `netlify.toml`
6. اضغط "Deploy site"

### الطريقة الثانية: Netlify CLI

```bash
# تثبيت Netlify CLI
npm install -g netlify-cli

# تسجيل الدخول
netlify login

# بناء المشروع
npm run build

# نشر المشروع
netlify deploy --prod
```

### الطريقة الثالثة: رفع مباشر (Drag & Drop)

1. قم ببناء المشروع:
   ```bash
   npm install
   npm run build
   ```
2. اذهب إلى [Netlify Drop](https://app.netlify.com/drop)
3. اسحب مجلد `out` وأفلته في الصفحة

## التقنيات المستخدمة

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Vercel Analytics
