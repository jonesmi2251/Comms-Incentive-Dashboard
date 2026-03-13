# 📊 Weekly Wrap Data Manager Guide

## Overview

The **Data Manager** is a specialized tool for uploading and processing CSV data for the Weekly Wrap Newsletter section of your Subway® Communications Metrics Dashboard. It automatically filters and formats your email data, making monthly updates quick and easy.

---

## 🎯 What It Does

The Data Manager:

1. **Accepts CSV files** exported from your email platform
2. **Automatically filters** to include only Franchisee-related emails
3. **Extracts** Open Rate and CTR (Click Through Rate) data
4. **Generates** properly formatted JavaScript code
5. **Provides** preview and statistics before you update the dashboard

---

## 🔍 Filtering Criteria

The tool automatically includes rows where the "Email Newsletter Name" contains any of these keywords (case-insensitive):

- **Franchisee**
- **Franchisees**  
- **FZE**
- **FZEs**
- **FZES**

All other email types (HQ, SMO Teams, etc.) are automatically excluded.

---

## 📁 Expected CSV Format

Your CSV file should contain these columns:

| Column Name | Description | Example |
|-------------|-------------|---------|
| Email Newsletter Name | The name of the email campaign | UKI: Weekly Wrap - Mar 11, 2026 \| UKI Franchisees |
| Category | Email category | General |
| Last Updated | Last update timestamp | Mar 11, 2026 9:15 AM |
| Status | Email status | Sent |
| Send Time | When the email was sent | Mar 11, 2026 9:00 AM |
| Audience | Number of recipients | 1061 |
| Open Rate | Open rate percentage | 55.80 |
| CTR | Click-through rate percentage | 8.15 |

### Example CSV Row:
```
"UKI: Weekly Wrap - Mar 11, 2026 | UKI Franchisees",General,Mar 11, 2026 9:15 AM,Sent,Mar 11, 2026 9:00 AM,1061,55.80,8.15
```

---

## 🚀 How to Use

### Step 1: Access the Data Manager

1. Open your dashboard (`index.html`)
2. Click the **"Data Manager"** button in the header (top-right corner)
3. You'll be taken to `data-manager.html`

### Step 2: Upload Your CSV File

1. Click the upload area **OR** drag and drop your CSV file
2. The file must be in `.csv` format
3. Recommended naming: `all-emails-full-MM-DD-YYYY.csv`

### Step 3: Review the Filtered Data

Once uploaded, you'll see:

- **Statistics Card**:
  - Total Rows in CSV
  - Franchisee Rows (Filtered)
  - Average Open Rate
  - Average CTR

- **Preview Table**: First 10 filtered rows showing:
  - Email Newsletter Name
  - Send Date
  - Audience (recipients)
  - Open Rate (%)
  - CTR (%)

### Step 4: Copy the Generated Code

1. Review the JavaScript code in the code output section
2. Click **"Copy Code to Clipboard"** button
3. Alternatively, click **"Download as .js File"** to save it

### Step 5: Update Your Dashboard

1. Open `js/data.js` in your code editor
2. Find the `weeklyWrapData` array (around line 178)
3. **Replace** the entire array contents with the copied code
4. Save `js/data.js`
5. Refresh your dashboard to see the updated data

---

## 📝 Generated Code Format

The tool generates code in this format:

```javascript
// WEEKLY WRAP NEWSLETTER DATA
// Real data from CSV - Franchisee emails only
// Tracking: Open Rate (%) and CTR (Click Through Rate %)
// Last updated: Mar 12, 2026
// ========================================
const weeklyWrapData = [
    // Jul 2025 - Q3
    { week: 31, date: 'Jul 30, 2025', year: 2025, quarter: 'Q3', month: 'Jul', openRate: 63.27, ctr: 8.82, recipients: 1089 },
    
    // Aug 2025 - Q3
    { week: 32, date: 'Aug 6, 2025', year: 2025, quarter: 'Q3', month: 'Aug', openRate: 62.74, ctr: 8.19, recipients: 1087 },
    // ... more entries
];
```

Each entry includes:
- `week`: Week number of the year (1-52)
- `date`: Formatted date string
- `year`: Year (e.g., 2025)
- `quarter`: Quarter designation (Q1, Q2, Q3, Q4)
- `month`: Month abbreviation (Jan, Feb, Mar, etc.)
- `openRate`: Open rate percentage (e.g., 63.27)
- `ctr`: Click-through rate percentage (e.g., 8.82)
- `recipients`: Number of email recipients (e.g., 1089)

---

## ⚙️ How It Works (Technical Details)

### 1. CSV Parsing
- Handles quoted fields with commas
- Automatically detects column positions
- Validates required columns exist

### 2. Data Filtering
- Case-insensitive keyword matching
- Checks "Email Newsletter Name" column
- Includes only Franchisee-related rows

### 3. Date Processing
- Parses various date formats
- Calculates week numbers
- Determines quarters automatically
- Extracts month abbreviations

### 4. Data Sorting
- Sorts chronologically by send date
- Groups by year and month
- Maintains proper sequence

### 5. Code Generation
- Formats JavaScript arrays
- Adds descriptive comments
- Includes metadata header
- Ensures valid syntax

---

## 🔧 Troubleshooting

### "Required columns not found in CSV"

**Problem**: The tool can't find expected columns in your CSV.

**Solution**:
- Verify your CSV has these columns: "Email Newsletter Name", "Open Rate", "CTR"
- Check that column names match exactly (case-insensitive is OK)
- Ensure the first row contains headers

### "No data after filtering"

**Problem**: No rows matched the filter criteria.

**Solution**:
- Check that your CSV contains Franchisee emails
- Verify the "Email Newsletter Name" column includes keywords like "Franchisee", "FZE", etc.
- Review the filter keywords in the info box

### "Date parsing issues"

**Problem**: Dates aren't displaying correctly in the preview.

**Solution**:
- The tool handles multiple date formats automatically
- If issues persist, ensure "Send Time" column contains valid dates
- Format examples that work: "Mar 11, 2026 9:00 AM" or "2026-03-11"

### "Code won't copy to clipboard"

**Problem**: Browser security blocks clipboard access.

**Solution**:
- Click inside the code output area
- Use keyboard shortcuts: Ctrl+A (select all) then Ctrl+C (copy)
- Or use the "Download as .js File" button instead

---

## 📊 Dashboard Integration

After updating `js/data.js`, the Weekly Wrap section automatically displays:

### KPI Cards (Top Row)
1. **Latest Open Rate**: Most recent week's open rate with week-over-week change
2. **vs Last Year**: Comparison with same week last year
3. **vs Last Quarter**: Comparison with previous quarter average
4. **vs Last Month**: Comparison with previous month average

### Charts
1. **Weekly Open Rate Trend**: Last 26 weeks line chart
2. **Year-over-Year Comparison**: Bar chart comparing this year vs last year
3. **Quarterly Averages**: Trend chart showing quarterly performance

### Summary Statistics
- Avg Open Rate (all-time)
- Avg CTR (all-time)
- Best Open Rate (highest recorded)
- Best CTR (highest recorded)
- Latest CTR (most recent week)
- Total Weeks Tracked

---

## 🗓️ Monthly Update Workflow

Follow this process each month:

1. **Export CSV** from your email platform (on the 1st of each month)
2. **Open Data Manager** (`data-manager.html`)
3. **Upload CSV** file
4. **Review** filtered data and statistics
5. **Copy** generated code
6. **Update** `js/data.js` by replacing the `weeklyWrapData` array
7. **Save** and **refresh** dashboard
8. **Verify** data appears correctly in Weekly Wrap section

**Time Required**: ~5 minutes per month

---

## 🎨 Features

✅ **Drag & Drop Upload**: Easy file upload interface  
✅ **Automatic Filtering**: No manual data cleanup needed  
✅ **Live Preview**: See filtered data before updating  
✅ **Statistics Summary**: Quick overview of key metrics  
✅ **One-Click Copy**: Copy code to clipboard instantly  
✅ **Download Option**: Save generated code as `.js` file  
✅ **Error Handling**: Clear error messages and troubleshooting  
✅ **Responsive Design**: Works on desktop and mobile devices  
✅ **Subway Branding**: Consistent look and feel with dashboard  

---

## 🔒 Data Privacy

- All processing happens **client-side** in your browser
- No data is uploaded to external servers
- CSV files are not stored or cached
- Generated code contains only aggregated metrics
- Safe to use with sensitive internal data

---

## 📞 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Verify your CSV format matches the expected structure
3. Review the browser console for error messages (F12)
4. Ensure you're using a modern browser (Chrome, Firefox, Edge, Safari)

---

## 🎯 Quick Reference

| Task | Location | Action |
|------|----------|--------|
| Access Tool | Dashboard header | Click "Data Manager" button |
| Upload CSV | Data Manager page | Click or drag/drop file |
| Review Data | After upload | Check statistics and preview table |
| Copy Code | Code output section | Click "Copy Code to Clipboard" |
| Update Dashboard | js/data.js | Replace `weeklyWrapData` array |
| Verify Changes | Dashboard | Refresh and check Weekly Wrap section |

---

## ✨ Tips for Best Results

1. **Consistent Naming**: Keep CSV file naming consistent for easy tracking
2. **Monthly Cadence**: Update on the same day each month (e.g., 1st of the month)
3. **Backup First**: Keep a copy of old data before replacing
4. **Test Preview**: Always review the preview table before updating
5. **Check Statistics**: Verify average rates look reasonable
6. **Refresh Browser**: Use hard refresh (Ctrl+Shift+R) after updating data

---

**Last Updated**: March 12, 2026  
**Version**: 1.0  
**Dashboard**: Subway® Communications Metrics Dashboard
