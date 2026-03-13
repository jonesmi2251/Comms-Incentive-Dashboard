# 📊 Data Manager Workflow Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     WEEKLY WRAP DATA MANAGER WORKFLOW                    │
└─────────────────────────────────────────────────────────────────────────┘

┌──────────────────┐
│  EMAIL PLATFORM  │
│                  │
│  Export CSV      │
│  Monthly data    │
└────────┬─────────┘
         │
         │ CSV File (all-emails-full-MM-DD-YYYY.csv)
         │ Contains: All email types (Franchisee, HQ, SMO, etc.)
         │
         ▼
┌────────────────────────────────────────────────────────────────────────┐
│                         DATA MANAGER TOOL                               │
│                       (data-manager.html)                               │
│                                                                         │
│  ┌──────────────────────────────────────────────────────────────────┐ │
│  │  STEP 1: UPLOAD                                                   │ │
│  │  • Drag & drop or click to upload                                │ │
│  │  • Validates file format (.csv)                                  │ │
│  └──────────────────────────────────────────────────────────────────┘ │
│         │                                                               │
│         ▼                                                               │
│  ┌──────────────────────────────────────────────────────────────────┐ │
│  │  STEP 2: PARSE CSV                                                │ │
│  │  • Read all rows                                                  │ │
│  │  • Detect column positions                                        │ │
│  │  • Handle quoted fields                                           │ │
│  └──────────────────────────────────────────────────────────────────┘ │
│         │                                                               │
│         ▼                                                               │
│  ┌──────────────────────────────────────────────────────────────────┐ │
│  │  STEP 3: FILTER DATA                                              │ │
│  │  • Check "Email Newsletter Name" column                           │ │
│  │  • Include if contains:                                           │ │
│  │    ✓ "Franchisee" ✓ "Franchisees" ✓ "FZE" ✓ "FZEs" ✓ "FZES"    │ │
│  │  • Exclude all other rows                                         │ │
│  └──────────────────────────────────────────────────────────────────┘ │
│         │                                                               │
│         ▼                                                               │
│  ┌──────────────────────────────────────────────────────────────────┐ │
│  │  STEP 4: EXTRACT DATA                                             │ │
│  │  • Send Time → Date, Week#, Quarter, Month                       │ │
│  │  • Audience → Recipients count                                    │ │
│  │  • Open Rate → Percentage (e.g., 55.80)                          │ │
│  │  • CTR → Percentage (e.g., 8.15)                                 │ │
│  └──────────────────────────────────────────────────────────────────┘ │
│         │                                                               │
│         ▼                                                               │
│  ┌──────────────────────────────────────────────────────────────────┐ │
│  │  STEP 5: PROCESS & SORT                                           │ │
│  │  • Calculate week numbers (1-52)                                  │ │
│  │  • Determine quarters (Q1-Q4)                                     │ │
│  │  • Extract month abbreviations                                    │ │
│  │  • Sort chronologically by date                                   │ │
│  └──────────────────────────────────────────────────────────────────┘ │
│         │                                                               │
│         ▼                                                               │
│  ┌──────────────────────────────────────────────────────────────────┐ │
│  │  STEP 6: GENERATE CODE                                            │ │
│  │  • Format as JavaScript array                                     │ │
│  │  • Add descriptive comments                                       │ │
│  │  • Group by year and month                                        │ │
│  │  • Include metadata header                                        │ │
│  └──────────────────────────────────────────────────────────────────┘ │
│         │                                                               │
│         ▼                                                               │
│  ┌──────────────────────────────────────────────────────────────────┐ │
│  │  STEP 7: DISPLAY PREVIEW                                          │ │
│  │  ┌──────────────────────────────────────────────────────────┐   │ │
│  │  │ STATISTICS                                                │   │ │
│  │  │ • Total Rows: 150                                         │   │ │
│  │  │ • Filtered Rows: 45 (Franchisee only)                    │   │ │
│  │  │ • Avg Open Rate: 62.8%                                    │   │ │
│  │  │ • Avg CTR: 7.2%                                           │   │ │
│  │  └──────────────────────────────────────────────────────────┘   │ │
│  │  ┌──────────────────────────────────────────────────────────┐   │ │
│  │  │ PREVIEW TABLE (First 10 rows)                            │   │ │
│  │  │ Name | Date | Audience | Open Rate | CTR                 │   │ │
│  │  │ UKI Franchisees | Mar 11 | 1061 | 55.80% | 8.15%        │   │ │
│  │  │ Weekly Wrap FZE | Mar 4 | 1058 | 57.20% | 7.92%         │   │ │
│  │  │ ...                                                       │   │ │
│  │  └──────────────────────────────────────────────────────────┘   │ │
│  │  ┌──────────────────────────────────────────────────────────┐   │ │
│  │  │ GENERATED CODE                                            │   │ │
│  │  │ const weeklyWrapData = [                                 │   │ │
│  │  │   { week: 31, date: 'Jul 30, 2025', ...                 │   │ │
│  │  │   ...                                                     │   │ │
│  │  │ ];                                                        │   │ │
│  │  └──────────────────────────────────────────────────────────┘   │ │
│  └──────────────────────────────────────────────────────────────────┘ │
│         │                                                               │
│         ▼                                                               │
│  ┌──────────────────────────────────────────────────────────────────┐ │
│  │  STEP 8: USER ACTION                                              │ │
│  │  ┌──────────────────┐  ┌───────────────────┐                    │ │
│  │  │  Copy to         │  │  Download as      │                    │ │
│  │  │  Clipboard       │  │  .js File         │                    │ │
│  │  └──────────────────┘  └───────────────────┘                    │ │
│  └──────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
         │
         │ Generated JavaScript Code
         │
         ▼
┌─────────────────────────┐
│   USER'S CODE EDITOR    │
│                         │
│   Open: js/data.js      │
│   Find: weeklyWrapData  │
│   Paste: New code       │
│   Save: File            │
└───────────┬─────────────┘
            │
            │ Updated data.js
            │
            ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         DASHBOARD (index.html)                           │
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │  WEEKLY WRAP SECTION                                                │ │
│  │                                                                     │ │
│  │  KPI Cards:                                                         │ │
│  │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────┐ │ │
│  │  │ Latest Open  │ │ vs Last Year │ │ vs Last Qtr  │ │ vs Last  │ │ │
│  │  │ Rate: 62.8%  │ │ +5.2%        │ │ +3.1%        │ │ Month    │ │ │
│  │  │ ↑ +2.1% WoW  │ │              │ │              │ │ +1.8%    │ │ │
│  │  └──────────────┘ └──────────────┘ └──────────────┘ └──────────┘ │ │
│  │                                                                     │ │
│  │  Charts:                                                            │ │
│  │  ┌─────────────────────────────────────────────────────────────┐  │ │
│  │  │  Weekly Open Rate Trend (Last 26 weeks)                     │  │ │
│  │  │  [Line chart showing trend]                                  │  │ │
│  │  └─────────────────────────────────────────────────────────────┘  │ │
│  │  ┌───────────────────────┐ ┌─────────────────────────────────┐  │ │
│  │  │ Year-over-Year        │ │ Quarterly Averages              │  │ │
│  │  │ [Bar chart]           │ │ [Trend chart]                   │  │ │
│  │  └───────────────────────┘ └─────────────────────────────────┘  │ │
│  │                                                                     │ │
│  │  Summary Statistics:                                                │ │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────┐ │ │
│  │  │ Avg Open │ │ Avg CTR  │ │ Best     │ │ Best CTR │ │ Latest │ │ │
│  │  │ 62.8%    │ │ 7.2%     │ │ 68.5%    │ │ 10.8%    │ │ CTR    │ │ │
│  │  │          │ │          │ │          │ │          │ │ 8.2%   │ │ │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └────────┘ │ │
│  └────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                             KEY BENEFITS                                 │
│                                                                          │
│  ⏱️  Time Savings: 30+ min → 5 min per month (83% reduction)            │
│  🎯 Accuracy: Eliminates manual entry errors                            │
│  🔒 Privacy: All processing client-side (no data uploads)              │
│  📊 Visibility: Preview data before updating dashboard                  │
│  🔄 Repeatability: Same workflow every month                            │
│  📈 Scalability: Handles any CSV size instantly                         │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                        FILTERING LOGIC                                   │
│                                                                          │
│  Email Newsletter Name                           Include?                │
│  ────────────────────────────────────────────    ────────               │
│  "UKI: Weekly Wrap | UKI Franchisees"            ✅ YES                  │
│  "Weekly Wrap Newsletter - FZE Edition"          ✅ YES                  │
│  "Communications Update - Franchisee Focus"      ✅ YES                  │
│  "Weekly Wrap - FZES Team"                       ✅ YES                  │
│  "Weekly Wrap - HQ Edition"                      ❌ NO                   │
│  "SMO Connect Newsletter"                        ❌ NO                   │
│  "Weekly Update - Team Leaders"                  ❌ NO                   │
│                                                                          │
│  Filter Keywords (case-insensitive):                                    │
│  • Franchisee  • Franchisees  • FZE  • FZEs  • FZES                    │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                         DATA FLOW SUMMARY                                │
│                                                                          │
│  CSV Export → Upload → Parse → Filter → Extract → Process →             │
│  Generate → Preview → Copy → Paste → Save → Refresh → Done! ✅          │
│                                                                          │
│  Time: ~5 minutes per month                                             │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 📊 Data Transformation Example

### Input (CSV Row):
```csv
"UKI: Weekly Wrap - Mar 11, 2026 | UKI Franchisees","General","Mar 11, 2026 9:15 AM","Sent","Mar 11, 2026 9:00 AM","1061","55.80","8.15"
```

### Processing:
1. **Filter Check**: "UKI Franchisees" contains "Franchisees" → ✅ Include
2. **Date Parse**: "Mar 11, 2026 9:00 AM" → Date object
3. **Week Calculate**: Week 11 of 2026
4. **Quarter Determine**: March = Q1
5. **Month Extract**: "Mar"
6. **Data Extract**: 
   - Audience: 1061
   - Open Rate: 55.80
   - CTR: 8.15

### Output (JavaScript):
```javascript
{ week: 11, date: 'Mar 11, 2026', year: 2026, quarter: 'Q1', month: 'Mar', openRate: 55.80, ctr: 8.15, recipients: 1061 }
```

---

## 🔄 Monthly Workflow Cycle

```
Month 1: March 2026
├─ Day 1: Export CSV from email platform
├─ Day 1: Upload to Data Manager
├─ Day 1: Copy generated code
├─ Day 1: Update js/data.js
└─ Day 1: Refresh dashboard → Data updated! ✅

Month 2: April 2026
├─ Day 1: Export new CSV (includes March data)
├─ Day 1: Upload to Data Manager
├─ Day 1: Copy generated code
├─ Day 1: Update js/data.js
└─ Day 1: Refresh dashboard → Data updated! ✅

[Repeat monthly...]
```

---

## 🎯 Quick Access Points

| Location | Access Method |
|----------|---------------|
| Data Manager Tool | Click "Data Manager" button in dashboard header |
| Data Manager Direct | Open `data-manager.html` in browser |
| Data File | Edit `js/data.js` → Find `weeklyWrapData` array |
| Dashboard Display | Navigate to "Weekly Wrap" tab in dashboard |
| Documentation | Read `DATA-MANAGER-QUICKSTART.md` |

---

**Visual Guide Version**: 1.0  
**Last Updated**: March 12, 2026
