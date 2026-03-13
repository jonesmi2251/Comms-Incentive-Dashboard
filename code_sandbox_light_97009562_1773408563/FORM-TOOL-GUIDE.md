# 📋 Data Entry Form Tool - Quick Guide

## 🎯 What Is This?

A **visual form tool** that makes adding new data to your dashboard super easy! No typing JSON manually - just fill in the blanks!

---

## 🚀 How to Use

### **Step 1: Open the Form**
```
Double-click: data-entry-form.html
```
Opens in your browser with a beautiful Subway-branded interface!

### **Step 2: Choose Your Tab**
- 🎓 **Training** - Add training campaigns
- 🍽️ **Restaurant** - Add restaurant visits
- 📧 **Weekly Wrap** - Add weekly newsletter data
- 📬 **SMO Connect** - Add monthly newsletter data
- 📊 **Bulk Entry** - Paste multiple entries at once!

### **Step 3: Fill in the Form**
All fields marked with * are required. The form guides you with:
- ✅ Placeholders showing example values
- ✅ Helpful tips under each field
- ✅ Dropdown menus for quarters, months, status

### **Step 4: Generate JSON**
Click the **"✨ Generate JSON"** button

### **Step 5: Copy the Output**
Click **"📋 Copy to Clipboard"** button

### **Step 6: Add to Your Data**
1. Open `data-updater.json`
2. Find the right section
3. Add a comma after the last entry
4. Paste your generated JSON
5. Save!

### **Step 7: Convert & Update**
Use `data-updater.html` to convert to JavaScript and update your dashboard!

---

## 📊 Tab Details

### 🎓 Training Campaigns Tab

**Fields:**
- Campaign Name (e.g., "Campaign 6")
- Year (e.g., 2025)
- Period (e.g., "Dec 2025")
- Participants (number)
- Completion Rate (0-100%)
- Status (Completed or Planned)

**Example Output:**
```json
{
  "campaign": "Campaign 6",
  "year": 2025,
  "period": "Dec 2025",
  "participants": 420,
  "completionRate": 95,
  "status": "completed"
}
```

---

### 🍽️ Restaurant Visits Tab

**Fields:**
- Month (e.g., "Apr 2025")
- Number of Visits
- Average Score (%)
- Highest Score (%)
- Lowest Score (%)
- Initiative Launch? (Yes/No)

**Example Output:**
```json
{
  "month": "Apr 2025",
  "visits": 75,
  "avgScore": 89.5,
  "highest": 99,
  "lowest": 83
}
```

---

### 📧 Weekly Wrap Tab

**Fields:**
- Week Label (e.g., "Week 11")
- Date (e.g., "Mar 17, 2025")
- Year (e.g., 2025)
- Quarter (dropdown: Q1, Q2, Q3, Q4)
- Month (dropdown: Jan-Dec)
- Open Rate (%)
- Recipients (number)

**Example Output:**
```json
{
  "week": "Week 11",
  "date": "Mar 17, 2025",
  "year": 2025,
  "quarter": "Q1",
  "month": "Mar",
  "openRate": 69.5,
  "recipients": 1160
}
```

---

### 📬 SMO Connect Tab

**Fields:**
- Month (e.g., "Apr 2025")
- Year (e.g., 2025)
- Quarter (dropdown: Q1-Q4)
- Open Rate (%)
- Recipients (number)

**Example Output:**
```json
{
  "month": "Apr 2025",
  "year": 2025,
  "quarter": "Q2",
  "openRate": 62.8,
  "recipients": 995
}
```

---

### 📊 Bulk Entry Tab

**Super Powerful!** Paste multiple entries at once from Excel or CSV.

**How to use:**
1. Select data type from dropdown
2. Copy data from Excel/CSV (columns separated by Tab or Comma)
3. Paste into text area
4. Click "Generate All JSON"
5. Get JSON for ALL entries at once!

**Training Bulk Format:**
```
Campaign 6, 2025, Dec 2025, 420, 95, completed
Campaign 7, 2025, Feb 2026, 450, 97, completed
```

**Restaurant Bulk Format:**
```
Apr 2025, 75, 89.5, 99, 83
May 2025, 78, 90.2, 99, 85
```

**Weekly Wrap Bulk Format:**
```
Week 11, Mar 17 2025, 2025, Q1, Mar, 69.5, 1160
Week 12, Mar 24 2025, 2025, Q1, Mar, 70.2, 1165
```

**SMO Connect Bulk Format:**
```
Apr 2025, 2025, Q2, 62.8, 995
May 2025, 2025, Q2, 63.5, 1000
```

---

## 💡 Features

### ✅ Form Validation
- All required fields checked
- Shows error if fields are missing
- Clear error messages

### ✅ Visual Feedback
- Success messages in green
- Error messages in red
- Copy confirmation alerts

### ✅ Helpful Hints
- Placeholder text in every field
- Format examples shown
- Tips under each input

### ✅ Easy Copy-Paste
- One-click copy to clipboard
- Formatted JSON ready to use
- No manual formatting needed

### ✅ Bulk Processing
- Paste from Excel directly
- Multiple entries at once
- Huge time saver!

---

## 🔄 Complete Workflow

### Your Monthly Update Process:

```
STEP 1: Collect Your Data
└─ Get your metrics from your system

STEP 2: Open data-entry-form.html
└─ Beautiful form opens in browser

STEP 3: Fill in Form OR Paste Bulk Data
└─ Choose single entry tabs or bulk tab

STEP 4: Generate JSON
└─ Click button, see formatted output

STEP 5: Copy to Clipboard
└─ One-click copy

STEP 6: Update data-updater.json
└─ Paste into appropriate array

STEP 7: Convert with data-updater.html
└─ Convert JSON to JavaScript

STEP 8: Update Dashboard
└─ Paste into js/data.js

STEP 9: Refresh & View
└─ See your updated metrics!
```

**Total Time: 5-7 minutes!**

---

## 🎨 Design Features

### Subway Branding
- ✅ Official green (#009743) and yellow (#FFC600)
- ✅ Subway logo in header
- ✅ Professional appearance
- ✅ Matches dashboard design

### User-Friendly Interface
- ✅ Clean, modern design
- ✅ Tabbed navigation
- ✅ Responsive (works on mobile too!)
- ✅ Clear button actions
- ✅ Visual feedback

---

## 📝 Tips & Tricks

### Tip 1: Use Bulk Entry for Multiple Items
If you have several weeks or months to add, use the Bulk Entry tab and paste from Excel!

### Tip 2: Keep Form Open While Working
You can keep the form open in one tab and your data file in another - switch back and forth easily!

### Tip 3: Copy from Excel
You can copy directly from Excel (Ctrl+C) and paste into bulk entry fields. The form handles tab-separated values automatically!

### Tip 4: Use Clear Form Button
Made a mistake? Click "Clear Form" to start fresh without reloading the page.

### Tip 5: Check Output Before Copying
Always review the generated JSON to make sure it looks correct before copying.

---

## ❓ Common Questions

**Q: Can I add multiple entries at once?**
A: Yes! Use the Bulk Entry tab to paste multiple rows from Excel or CSV.

**Q: What if I make a mistake?**
A: No problem! Just click "Clear Form" and start over. Nothing is saved until you paste it into data-updater.json.

**Q: Do I need to format dates specially?**
A: The form shows you the exact format needed. Just follow the placeholder examples.

**Q: Can I use this on my phone?**
A: Yes! The form is fully responsive and works on mobile devices.

**Q: What if a field is optional?**
A: Only fields marked with * are required. Others can be left empty.

---

## 🆚 Comparison: Form vs Manual

### Manual JSON Editing:
```
❌ Type all brackets, quotes, commas
❌ Easy to make syntax errors
❌ Hard to remember exact format
❌ Time-consuming
❌ Error-prone
```

### Using This Form:
```
✅ Fill in simple form fields
✅ Automatic JSON generation
✅ Format hints provided
✅ Fast and easy
✅ Copy with one click
✅ Bulk entry for multiple items
✅ Validation built-in
```

---

## 🎯 Best Practices

### For Weekly Updates:
1. Open data-entry-form.html every Monday
2. Fill in last week's metrics
3. Generate & copy JSON
4. Update your data file
5. Refresh dashboard

### For Monthly Updates:
1. Use Bulk Entry tab
2. Paste entire month's data at once
3. Generate all entries
4. Copy & update data file
5. Convert & refresh

### For Campaign Updates:
1. Use Training tab
2. Fill in campaign details
3. Generate JSON
4. Add to data file
5. Update dashboard

---

## 🎉 Summary

The **Data Entry Form** is your friendly interface for adding data to the dashboard:

✅ **Visual forms** - No JSON typing required
✅ **Validation** - Checks your input automatically  
✅ **Bulk entry** - Add multiple items at once
✅ **One-click copy** - No manual formatting
✅ **Mobile-friendly** - Use anywhere
✅ **Subway-branded** - Looks professional
✅ **Time-saving** - 50% faster than manual entry

---

## 📁 Files You Now Have

```
1. data-entry-form.html      ← NEW! Visual form tool
2. data-updater.json         ← Your data (paste form output here)
3. data-updater.html         ← Converter tool
4. js/data.js                ← Final destination
```

**Your new workflow:**
```
Form → JSON → data-updater.json → Converter → js/data.js → Dashboard
```

---

## 🥖 Ready to Try?

**Open data-entry-form.html now and try adding a test entry!**

It's that easy! 🎉
