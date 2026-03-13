# 📋 JSON Data Updater Guide

## 🎯 What Is This?

The JSON Data Updater is an easy way to update your dashboard data using a simple JSON file format. No JavaScript knowledge required!

---

## 📁 Files You'll Use

1. **data-updater.json** - Edit this file with your data
2. **data-updater.html** - Open this to convert your JSON to JavaScript
3. **js/data.js** - Paste the converted output here

---

## 🚀 Quick Start (4 Easy Steps)

### Step 1: Edit Your Data
Open `data-updater.json` in any text editor and update your data.

### Step 2: Convert to JavaScript
Open `data-updater.html` in your browser, paste your JSON, and click "Convert".

### Step 3: Copy the Output
Copy the converted JavaScript code.

### Step 4: Update Dashboard
Paste into `js/data.js`, save, and refresh your browser.

---

## 📝 Detailed Instructions

### 1️⃣ Editing data-updater.json

**What you'll see:**
```json
{
  "trainingCampaigns": [
    {
      "campaign": "Campaign 1",
      "year": 2025,
      "period": "Jan 2025",
      "participants": 340,
      "completionRate": 85,
      "status": "completed"
    }
  ],
  "restaurantVisits": [...],
  "weeklyWrap": [...],
  "smoConnect": [...]
}
```

**How to add new data:**

1. Find the section you want to update
2. Scroll to the last entry in that array
3. Add a comma after the closing `}`
4. Copy the last entry
5. Paste it below
6. Update the values
7. Save the file

**Example - Adding a new campaign:**

```json
{
  "trainingCampaigns": [
    {
      "campaign": "Campaign 5",
      "year": 2025,
      "period": "Oct 2025",
      "participants": 400,
      "completionRate": 93,
      "status": "completed"
    },
    {
      "campaign": "Campaign 6",
      "year": 2025,
      "period": "Dec 2025",
      "participants": 420,
      "completionRate": 95,
      "status": "completed"
    }
  ]
}
```

---

### 2️⃣ Using data-updater.html

**Step-by-step:**

1. **Open the file**
   - Double-click `data-updater.html`
   - Opens in your default web browser

2. **Paste your JSON**
   - Copy ALL contents from `data-updater.json`
   - Paste into the first text box
   - Or click "Load Sample Data" to see an example

3. **Convert**
   - Click the "🔄 Convert to JavaScript" button
   - See the converted output in the second text box

4. **Copy the output**
   - Click "📋 Copy to Clipboard" button
   - Or click "💾 Download as data.js" to download the file

5. **Success!**
   - You'll see a green success message
   - Now you're ready to update your dashboard

---

### 3️⃣ Updating js/data.js

**Method 1: Copy & Paste**

1. Open `js/data.js` in your text editor
2. Select ALL content (Ctrl+A / Cmd+A)
3. Delete everything
4. Paste the converted JavaScript
5. Save the file (Ctrl+S / Cmd+S)

**Method 2: Replace File**

1. If you clicked "Download as data.js" in the converter
2. Move the downloaded file to the `js/` folder
3. Replace the old `data.js` file
4. Done!

---

### 4️⃣ See Your Updates

1. Open `index.html` in your browser
2. Or if already open, refresh (F5 or Ctrl+R)
3. Your new data appears automatically!

---

## 📊 Field Descriptions

### Training Campaigns

```json
{
  "campaign": "Campaign 1",        // Name (use quotes)
  "year": 2025,                    // Year (no quotes)
  "period": "Jan 2025",            // Month Year (use quotes)
  "participants": 340,             // Number (no quotes)
  "completionRate": 85,            // 0-100 (no quotes, no % sign)
  "status": "completed"            // "completed" or "planned"
}
```

### Restaurant Visits

```json
{
  "month": "Jan 2025",             // Month Year (use quotes)
  "visits": 68,                    // Number (no quotes)
  "avgScore": 86.5,                // Can have decimals
  "highest": 98,                   // Number (no quotes)
  "lowest": 79,                    // Number (no quotes)
  "initiativeLaunch": true         // OPTIONAL - only for launch month
}
```

### Weekly Wrap Newsletter

```json
{
  "week": "Week 1",                // Week label (use quotes)
  "date": "Jan 6, 2025",           // Full date (use quotes)
  "year": 2025,                    // Year number (no quotes)
  "quarter": "Q1",                 // Q1, Q2, Q3, or Q4
  "month": "Jan",                  // 3-letter abbreviation
  "openRate": 63.5,                // 0-100, can have decimals
  "recipients": 1110               // Number (no quotes)
}
```

### SMO Connect Newsletter

```json
{
  "month": "Jan 2025",             // Month Year (use quotes)
  "year": 2025,                    // Year number (no quotes)
  "quarter": "Q1",                 // Q1, Q2, Q3, or Q4
  "openRate": 58.5,                // 0-100, can have decimals
  "recipients": 980                // Number (no quotes)
}
```

---

## ✅ JSON Rules to Remember

### DO:
✅ Use quotes around text values: `"campaign": "Campaign 1"`
✅ Use commas between entries: `{...}, {...}, {...}`
✅ Keep data in order (oldest to newest)
✅ Use numbers without quotes: `"openRate": 85.5`
✅ Save a backup before making big changes

### DON'T:
❌ Don't put quotes around numbers: `"year": "2025"` ❌
❌ Don't forget commas: `{...} {...}` ❌
❌ Don't use % symbol: `"openRate": "85%"` ❌
❌ Don't forget quotes on text: `"month": Jan 2025` ❌
❌ Don't mix up the sections

---

## 🔍 Common Issues

### "Error parsing JSON"

**Problem:** Your JSON has a syntax error

**Solutions:**
- Check for missing commas
- Check for missing quotes
- Use a JSON validator: https://jsonlint.com/
- Compare to the sample data

### "Please paste your JSON data first"

**Problem:** The text box is empty

**Solution:** Copy data from `data-updater.json` and paste it

### Dashboard shows old data

**Problem:** Browser is cached

**Solutions:**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Close and reopen browser

### Numbers look wrong

**Problem:** Numbers are in quotes or have % symbol

**Solution:** Remove quotes and % symbols:
```json
// Wrong:
"openRate": "85%"

// Correct:
"openRate": 85
```

---

## 🎓 Examples

### Adding a New Training Campaign

**In data-updater.json:**
```json
{
  "trainingCampaigns": [
    // ... existing campaigns ...
    {
      "campaign": "Campaign 6",
      "year": 2025,
      "period": "Dec 2025",
      "participants": 420,
      "completionRate": 95,
      "status": "completed"
    }
  ]
}
```

### Adding Multiple Restaurant Visits

**In data-updater.json:**
```json
{
  "restaurantVisits": [
    // ... existing months ...
    {
      "month": "Apr 2025",
      "visits": 75,
      "avgScore": 89.5,
      "highest": 99,
      "lowest": 83
    },
    {
      "month": "May 2025",
      "visits": 78,
      "avgScore": 90.2,
      "highest": 99,
      "lowest": 85
    }
  ]
}
```

### Adding Weekly Wrap Data

**In data-updater.json:**
```json
{
  "weeklyWrap": [
    // ... existing weeks ...
    {
      "week": "Week 11",
      "date": "Mar 17, 2025",
      "year": 2025,
      "quarter": "Q1",
      "month": "Mar",
      "openRate": 69.5,
      "recipients": 1160
    }
  ]
}
```

---

## 📅 Quarter Reference

| Quarter | Months |
|---------|--------|
| Q1 | January, February, March |
| Q2 | April, May, June |
| Q3 | July, August, September |
| Q4 | October, November, December |

---

## 💡 Pro Tips

### Tip 1: Test with Small Changes
Start by adding just one entry, convert it, and test before adding lots of data.

### Tip 2: Keep a Backup
Before replacing `data.js`, save a copy with a different name like `data-backup.js`.

### Tip 3: Use a JSON Editor
Some text editors (like VS Code) have JSON validation built-in and will highlight errors.

### Tip 4: Validate Before Converting
Copy your JSON and paste it into https://jsonlint.com/ to check for errors before converting.

### Tip 5: Organize Your Data
Keep a master copy of `data-updater.json` and update it regularly. This becomes your data source.

---

## 🆘 Need Help?

### Step-by-Step Debugging:

1. **Check your JSON syntax**
   - Go to https://jsonlint.com/
   - Paste your JSON
   - Fix any errors shown

2. **Try the sample data**
   - Click "Load Sample Data" in data-updater.html
   - Convert it
   - If this works, your issue is in your JSON

3. **Compare to examples**
   - Look at the existing data structure
   - Make sure your new data matches exactly

4. **Start fresh**
   - Use the included `data-updater.json`
   - Update just one section at a time
   - Test after each update

---

## 📋 Quick Workflow

**Your regular update routine:**

```
1. Open data-updater.json
2. Add your new data at the end of the appropriate section
3. Save the file
4. Open data-updater.html in browser
5. Paste your JSON
6. Click "Convert to JavaScript"
7. Click "Copy to Clipboard"
8. Open js/data.js
9. Select All → Delete → Paste → Save
10. Refresh your dashboard browser tab
11. Done! 🎉
```

**Time required:** 2-3 minutes once you get the hang of it!

---

## 🎯 Summary

The JSON Data Updater makes it easy to manage your dashboard data:

✅ **Edit data in simple JSON format**
✅ **Visual converter tool (data-updater.html)**
✅ **Copy-paste into dashboard**
✅ **No JavaScript knowledge needed**
✅ **Works with all 4 dashboard sections**

**Now go update that dashboard!** 🥖📊
