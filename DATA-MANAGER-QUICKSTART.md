# 🚀 Quick Start: Data Manager

## What is it?
A tool that automates uploading and processing CSV data for the Weekly Wrap Newsletter section.

---

## ⚡ 5-Minute Monthly Update

### 1. Export CSV from Email Platform
- File format: `all-emails-full-MM-DD-YYYY.csv`
- Must include: Email Newsletter Name, Send Time, Audience, Open Rate, CTR

### 2. Open Data Manager
- Click **"Data Manager"** button in dashboard header (top-right)
- Or open `data-manager.html` directly

### 3. Upload CSV
- Click upload area **OR** drag & drop file
- Tool automatically filters to Franchisee emails only

### 4. Review & Copy
- Check statistics and preview table
- Click **"Copy Code to Clipboard"**

### 5. Update Data File
- Open `js/data.js` in code editor
- Find `weeklyWrapData` array (~line 178)
- **Replace** array contents with copied code
- Save file

### 6. Refresh Dashboard
- Reload browser (F5 or Ctrl+R)
- Check Weekly Wrap section updates

**Done!** ✅

---

## 🔍 Automatic Filtering

Tool includes only emails with these keywords in "Email Newsletter Name":
- **Franchisee** | **Franchisees** | **FZE** | **FZEs** | **FZES**

Everything else (HQ, SMO, Teams) is automatically excluded.

---

## 📊 What You'll See

After uploading, you get:

✅ **Statistics**
- Total rows in CSV
- Franchisee rows (filtered)
- Average Open Rate
- Average CTR

✅ **Preview Table**
- First 10 filtered entries
- Shows: Name, Date, Audience, Open Rate, CTR

✅ **Generated Code**
- Ready-to-paste JavaScript
- Properly formatted and sorted
- Includes week numbers, quarters, dates

---

## 📁 Files You'll Work With

| File | Action |
|------|--------|
| `data-manager.html` | Open this to upload CSV |
| `js/data.js` | Paste generated code here |
| `index.html` | Dashboard (refresh to see updates) |

---

## ❓ Common Questions

### Q: What CSV columns are required?
**A:** Email Newsletter Name, Send Time, Audience, Open Rate, CTR

### Q: What if my CSV has other columns?
**A:** No problem! Tool ignores extra columns.

### Q: Can I test without affecting the dashboard?
**A:** Yes! Upload CSV, review preview, but don't paste code into data.js

### Q: What if I make a mistake?
**A:** Just re-upload the CSV and copy new code, or undo changes in data.js

### Q: How often should I update?
**A:** Monthly (recommended: 1st of each month)

---

## 🎯 Pro Tips

1. **Keep CSV naming consistent**: `all-emails-full-MM-DD-YYYY.csv`
2. **Backup data.js before updating**: Copy existing data just in case
3. **Check preview table**: Verify data looks correct before copying
4. **Use hard refresh**: Ctrl+Shift+R after updating to clear cache
5. **Bookmark data-manager.html**: For quick access next month

---

## 📖 Need More Help?

- **Full Guide**: See `DATA-MANAGER-GUIDE.md`
- **Troubleshooting**: Check troubleshooting section in guide
- **Implementation Details**: See `DATA-MANAGER-COMPLETE.md`

---

## ✅ Checklist

- [ ] Export CSV from email platform
- [ ] Open data-manager.html
- [ ] Upload CSV file
- [ ] Review statistics and preview
- [ ] Copy generated code
- [ ] Open js/data.js in editor
- [ ] Find weeklyWrapData array
- [ ] Replace array contents
- [ ] Save file
- [ ] Refresh dashboard
- [ ] Verify Weekly Wrap section updated

---

**Time Required**: ~5 minutes  
**Frequency**: Monthly  
**Difficulty**: Easy ⭐

**Last Updated**: March 12, 2026
