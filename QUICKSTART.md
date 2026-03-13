# 🚀 Quick Start Guide - Subway® Comms Dashboard

## 📖 How to Use This Dashboard

### 1️⃣ View the Dashboard
```
Open: index.html in any web browser
```

That's it! The dashboard loads with example data showing all 4 tracking sections.

---

## ✏️ Update Your Data (Simple!)

### All data is in ONE file: `js/data.js`

Open `js/data.js` in any text editor (Notepad, TextEdit, VS Code, etc.) and find the section you want to update:

### 📚 Training Campaigns

**Find:** `trainingCampaignsData` (around line 11)

**Add new campaign:**
```javascript
{
    campaign: 'Campaign 6',
    year: 2025,
    period: 'Dec 2025',
    participants: 420,
    completionRate: 95,
    status: 'completed'  // or 'planned'
}
```

---

### 🍽️ Restaurant Visits

**Find:** `restaurantVisitsData` (around line 58)

**Add new month:**
```javascript
{
    month: 'Apr 2025',
    visits: 75,
    avgScore: 89.5,
    highest: 99,
    lowest: 83
}
```

---

### 📧 Weekly Wrap Newsletter

**Find:** `weeklyWrapData` (around line 80)

**Add new week:**
```javascript
{
    week: 'Week 11',
    date: 'Mar 17, 2025',
    year: 2025,
    quarter: 'Q1',
    month: 'Mar',
    openRate: 69.5,
    recipients: 1160
}
```

**Important for Weekly Wrap:**
- `quarter`: Use 'Q1', 'Q2', 'Q3', or 'Q4'
- `month`: Use 3-letter month abbreviation (Jan, Feb, Mar, etc.)

---

### 📬 SMO Connect Newsletter

**Find:** `smoConnectData` (around line 160)

**Add new month:**
```javascript
{
    month: 'Apr 2025',
    year: 2025,
    quarter: 'Q2',
    openRate: 62.8,
    recipients: 995
}
```

---

## 💾 After Making Changes

1. **Save** the `js/data.js` file
2. **Refresh** your browser (F5 or Ctrl+R)
3. **Done!** All charts and metrics update automatically

---

## 🎨 What You Get

### Section 1: Training Completion
- ✅ Line chart showing completion rate trend
- ✅ Year-over-year bar chart comparison
- ✅ 4 KPI cards with key metrics
- ✅ Detailed data table

### Section 2: Restaurant Visits
- ✅ Multi-line trend chart (avg, highest, lowest)
- ✅ 4 KPI cards with key metrics
- ✅ Monthly performance table

### Section 3: Weekly Wrap Email
- ✅ Weekly trend line chart
- ✅ Year-over-year comparison chart
- ✅ Quarterly averages chart
- ✅ 4 KPI cards (latest, vs last year, vs last quarter, vs last month)
- ✅ 4 summary stats cards

### Section 4: SMO Connect Email
- ✅ Monthly trend line chart
- ✅ Year-over-year comparison chart
- ✅ Quarterly averages chart
- ✅ 4 KPI cards (latest, vs last year, vs last quarter, vs last month)
- ✅ 4 summary stats cards

---

## 🎯 Quick Tips

### ✅ Do's
- ✅ Always add newest data at the end of each array
- ✅ Keep dates in chronological order
- ✅ Use consistent date formats
- ✅ Save a backup copy of your data before major changes
- ✅ Test in browser after updates

### ❌ Don'ts
- ❌ Don't delete the commas between data entries
- ❌ Don't forget quotes around text values
- ❌ Don't mix up the data arrays
- ❌ Don't use completion rates over 100%
- ❌ Don't leave incomplete entries

---

## 🐛 Troubleshooting

### Dashboard looks broken?
- Check if you saved `data.js`
- Look for missing commas or quotes
- Clear browser cache (Ctrl+Shift+Delete)

### Charts not showing?
- Open browser console (F12)
- Look for red error messages
- Check if all data fields are present

### Data not updating?
- Hard refresh browser (Ctrl+Shift+R)
- Make sure you edited `js/data.js` (not a copy)

---

## 📊 Data Format Reference

### All Percentages
- Use numbers without % symbol
- Example: `completionRate: 85` means 85%
- Valid range: 0 to 100

### All Dates
- Training: `'Jan 2025'` or `'Mar 2024'`
- Restaurant: `'Jan 2025'` or `'Feb 2024'`
- Weekly Wrap: `'Jan 6, 2025'` (full date)
- SMO Connect: `'Jan 2025'` (month year)

### Quarter Values
- Use: `'Q1'`, `'Q2'`, `'Q3'`, or `'Q4'`
- Q1 = Jan-Mar
- Q2 = Apr-Jun
- Q3 = Jul-Sep
- Q4 = Oct-Dec

---

## 📱 Device Compatibility

Works on:
- 💻 Desktop computers
- 📱 Mobile phones
- 📲 Tablets
- 🖨️ Print (for reports)

---

## 🎨 Subway Branding

Colors used throughout:
- **Green**: `#009743` - Primary brand color
- **Yellow**: `#FFC600` - Accent color
- **White**: `#FFFFFF` - Clean backgrounds

---

## 📁 File Structure

```
Your Dashboard/
├── index.html          ← Open this in browser
├── README.md           ← Full documentation
├── QUICKSTART.md       ← This file
├── css/
│   └── style.css       ← Styles (don't need to edit)
└── js/
    ├── data.js         ← YOUR DATA GOES HERE! ★★★
    └── main.js         ← Logic (don't need to edit)
```

---

## 🎉 That's It!

You're ready to use your Subway Communications Metrics Dashboard!

**Remember:** Only edit `js/data.js` - everything else works automatically!

---

## 📞 Need Help?

1. Check the full **README.md** for detailed info
2. Look at the example data already in `data.js`
3. Make sure your new data follows the same format

**Pro Tip:** When adding new data, copy an existing entry, paste it below, and just change the values. This ensures correct formatting!

---

**🥖 Fresh data makes a fresh dashboard!**
