# Deploy to Namecheap (Shared Hosting)

## Prerequisites

- Namecheap cPanel credentials
- FTP or cPanel File Manager access

## Steps

### 1. Build the project

Run this in the project root:

```bash
npm run build
```

This generates the `dist/` folder with all static files.

### 2. Upload to Namecheap

#### Option A — cPanel File Manager
1. Log in to your Namecheap cPanel
2. Open **File Manager**
3. Navigate to `public_html/` (or the subfolder where your site lives)
4. Click **Upload**, select all files from the `dist/` folder
5. Overwrite existing files

#### Option B — FTP
Use any FTP client (FileZilla, WinSCP):
- **Host**: your domain or server IP
- **Username**: your cPanel username
- **Password**: your cPanel password
- **Port**: 21
- **Remote path**: `/public_html/`
- Upload the **contents** of `dist/`

### 3. Important Notes

- **No build step on server**: Namecheap shared hosting serves static files only. The `dist/` folder contains the fully built site — just upload it.
- **SPA routing**: Since this is a React SPA, direct URL access (e.g. `/about`) will return 404. You need to add a `.htaccess` file in `public_html/` with:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

Upload this `.htaccess` file alongside the `dist/` contents.

### 4. Verify

Visit your domain — the site should load. Test a few routes like `/about` and `/shop` to confirm SPA routing works.

---

## Updating (after future changes)

```bash
npm run build          # rebuild dist/
# upload dist/ contents to public_html/ again
```
