# 📚 Subway® Communications Metrics Dashboard - Documentation Index

Welcome to the complete documentation for the Subway® Communications Metrics Dashboard!

---

## 🚀 Quick Start

**New to the dashboard?** Start here:

1. 📖 **[QUICKSTART.md](QUICKSTART.md)** - Get started with the dashboard in 5 minutes
2. 🎯 **[README.md](README.md)** - Main project overview and features
3. 📊 **[PROJECT-SUMMARY.md](PROJECT-SUMMARY.md)** - Complete feature breakdown

---

## 📊 Data Manager (NEW!)

**For monthly CSV data updates:**

### Essential Reading:
- 🚀 **[DATA-MANAGER-QUICKSTART.md](DATA-MANAGER-QUICKSTART.md)** - 5-minute quick start guide
- 📖 **[DATA-MANAGER-GUIDE.md](DATA-MANAGER-GUIDE.md)** - Complete user manual with troubleshooting
- 🔄 **[DATA-MANAGER-WORKFLOW.md](DATA-MANAGER-WORKFLOW.md)** - Visual workflow diagram

### Reference:
- ✅ **[DATA-MANAGER-COMPLETE.md](DATA-MANAGER-COMPLETE.md)** - Implementation details and features
- 📋 **[IMPLEMENTATION-SUMMARY.md](IMPLEMENTATION-SUMMARY.md)** - Complete implementation summary

### What It Does:
- ✅ Automatically filters Franchisee emails from CSV exports
- ✅ Extracts Open Rate and CTR data
- ✅ Generates properly formatted code for dashboard
- ✅ Reduces monthly updates from 30+ min to 5 min

**Access**: Click "Data Manager" button in dashboard header or open `data-manager.html`

---

## 🎨 Dashboard Sections

### 1. Training Completion Initiative
**Tracks**: Training completion rates within first 7 days

**Metrics**:
- Latest completion rate
- Total improvement since C2 2025 initiative launch
- Average completion across all campaigns
- 2026 vs 2025 80% by launch comparison

**Documentation**: See [README.md](README.md#1-training-completion-initiative)

### 2. Restaurant Visits Initiative
**Tracks**: Monthly restaurant evaluation scores

**Metrics**:
- Current average evaluation score
- Total improvement since initiative launch
- Overall average across all months
- Highest and lowest scores per month

**Documentation**: See [README.md](README.md#2-restaurant-visits-initiative)

### 3. Weekly Wrap Newsletter
**Tracks**: Weekly email open rates and CTR for Franchisee emails

**Metrics**:
- Latest open rate
- Year-over-year comparison
- Quarter-over-quarter comparison
- Month-over-month comparison
- Average CTR, Best CTR, Latest CTR

**Data Updates**: Use Data Manager tool (see above)

**Documentation**: See [README.md](README.md#3-weekly-wrap-newsletter)

### 4. SMO Connect Newsletter
**Tracks**: Monthly email open rates

**Metrics**:
- Latest open rate
- Year-over-year comparison
- Quarter-over-quarter comparison
- Month-over-month comparison

**Documentation**: See [README.md](README.md#4-smo-connect-newsletter)

---

## 📝 Data Entry Tools

### Option 1: Data Manager (Recommended for Weekly Wrap)
- **File**: `data-manager.html`
- **Best For**: Weekly Wrap CSV uploads
- **Guide**: [DATA-MANAGER-QUICKSTART.md](DATA-MANAGER-QUICKSTART.md)

### Option 2: JSON Updater
- **File**: `data-updater.html`
- **Best For**: JSON-based data updates
- **Guide**: [JSON-UPDATER-GUIDE.md](JSON-UPDATER-GUIDE.md)

### Option 3: Data Entry Form
- **File**: `data-entry-form.html`
- **Best For**: Manual data entry
- **Guide**: [FORM-TOOL-GUIDE.md](FORM-TOOL-GUIDE.md)

### Option 4: Direct File Editing
- **File**: `js/data.js`
- **Best For**: Advanced users comfortable with code
- **Guide**: See [README.md](README.md#how-to-update-data)

---

## 🛠️ Feature Documentation

### Tab Navigation System
- **Guide**: [TAB-NAVIGATION-COMPLETE.md](TAB-NAVIGATION-COMPLETE.md)
- **Quick Start**: [TAB-NAVIGATION-QUICKSTART.md](TAB-NAVIGATION-QUICKSTART.md)
- **How It Works**: Click tabs to switch between sections, only one section visible at a time

### Training Section Updates
- **Completion**: [TRAINING-UPDATE-COMPLETE.md](TRAINING-UPDATE-COMPLETE.md)
- **Status**: [TRAINING-UPDATE-STATUS.md](TRAINING-UPDATE-STATUS.md)
- **Features**: Spotlight metrics, phase-based improvements, initiative tracking

### Chart System
- **Updates**: [CHART-UPDATES-COMPLETE.md](CHART-UPDATES-COMPLETE.md)
- **Final Updates**: [FINAL-CHART-UPDATES.md](FINAL-CHART-UPDATES.md)
- **Library**: Chart.js (loaded via CDN)

### Table Display
- **Updates**: [TABLE-UPDATE-COMPLETE.md](TABLE-UPDATE-COMPLETE.md)
- **Features**: Responsive tables, status badges, color-coded metrics

### Weekly Wrap Data Integration
- **Update**: [WEEKLY-WRAP-DATA-UPDATE.md](WEEKLY-WRAP-DATA-UPDATE.md)
- **Features**: Real CSV data, CTR tracking, automatic filtering

---

## 📁 Project File Structure

```
📦 Subway Communications Dashboard
├── 📄 index.html                      # Main dashboard
├── 📄 data-manager.html               # CSV data manager (NEW!)
├── 📄 data-updater.html               # JSON data updater
├── 📄 data-entry-form.html            # Manual data entry form
│
├── 📁 css/
│   └── style.css                      # All dashboard styles
│
├── 📁 js/
│   ├── data.js                        # All data arrays (EDIT THIS!)
│   └── main.js                        # Dashboard logic
│
└── 📚 Documentation/
    ├── README.md                      # Main overview ⭐ START HERE
    ├── QUICKSTART.md                  # Dashboard quick start
    │
    ├── 🆕 Data Manager/
    │   ├── DATA-MANAGER-QUICKSTART.md # 5-min quick start
    │   ├── DATA-MANAGER-GUIDE.md      # Complete guide
    │   ├── DATA-MANAGER-WORKFLOW.md   # Visual workflow
    │   ├── DATA-MANAGER-COMPLETE.md   # Implementation details
    │   └── IMPLEMENTATION-SUMMARY.md  # Master summary
    │
    ├── Feature Documentation/
    │   ├── TAB-NAVIGATION-COMPLETE.md
    │   ├── TAB-NAVIGATION-QUICKSTART.md
    │   ├── TRAINING-UPDATE-COMPLETE.md
    │   ├── TRAINING-UPDATE-STATUS.md
    │   ├── CHART-UPDATES-COMPLETE.md
    │   ├── FINAL-CHART-UPDATES.md
    │   ├── TABLE-UPDATE-COMPLETE.md
    │   └── WEEKLY-WRAP-DATA-UPDATE.md
    │
    ├── Data Entry Tools/
    │   ├── JSON-UPDATER-GUIDE.md
    │   ├── JSON-UPDATER-COMPLETE.md
    │   └── FORM-TOOL-GUIDE.md
    │
    └── Project Information/
        └── PROJECT-SUMMARY.md
```

---

## 🎯 Common Tasks & Where to Find Help

| Task | Documentation |
|------|---------------|
| **View dashboard** | Open `index.html` in browser |
| **Update Weekly Wrap data** | [DATA-MANAGER-QUICKSTART.md](DATA-MANAGER-QUICKSTART.md) |
| **Update Training data** | [README.md](README.md) → Training Data section |
| **Update Restaurant Visits data** | [README.md](README.md) → Restaurant Visits section |
| **Update SMO Connect data** | [README.md](README.md) → SMO Connect section |
| **Understand tab navigation** | [TAB-NAVIGATION-COMPLETE.md](TAB-NAVIGATION-COMPLETE.md) |
| **Troubleshoot CSV uploads** | [DATA-MANAGER-GUIDE.md](DATA-MANAGER-GUIDE.md) → Troubleshooting |
| **Manual data entry** | [FORM-TOOL-GUIDE.md](FORM-TOOL-GUIDE.md) |
| **JSON data updates** | [JSON-UPDATER-GUIDE.md](JSON-UPDATER-GUIDE.md) |
| **See all features** | [PROJECT-SUMMARY.md](PROJECT-SUMMARY.md) |

---

## 🔧 For Developers

### Code Files:
- `js/main.js` - Dashboard initialization, chart rendering, metric calculations
- `js/data.js` - Data arrays (Training, Restaurant, Weekly Wrap, SMO Connect)
- `css/style.css` - All styles including responsive design
- `index.html` - Main dashboard structure

### Key Functions:
- `initTrainingSection()` - Training metrics and charts
- `initRestaurantSection()` - Restaurant visit metrics and charts
- `initWeeklyWrapSection()` - Weekly Wrap email metrics
- `initSMOConnectSection()` - SMO Connect email metrics
- `initNavigation()` - Tab navigation system

### Libraries Used:
- **Chart.js** v4.4.0 - Charts and visualizations
- **Font Awesome** v6.4.0 - Icons
- **Google Fonts** - Inter font family

---

## 📅 Monthly Maintenance Schedule

### Week 1 (Start of Month):
1. **Weekly Wrap** - Upload new CSV via Data Manager
   - Guide: [DATA-MANAGER-QUICKSTART.md](DATA-MANAGER-QUICKSTART.md)
   - Time: 5 minutes

### As Needed (Campaign/Initiative Updates):
2. **Training** - Update when new campaigns launch
   - Guide: [README.md](README.md) → Training Data
   - Time: 2-3 minutes per campaign

3. **Restaurant Visits** - Update monthly scores
   - Guide: [README.md](README.md) → Restaurant Data
   - Time: 2 minutes

4. **SMO Connect** - Update monthly email data
   - Guide: [README.md](README.md) → SMO Connect Data
   - Time: 2 minutes

**Total Monthly Time**: ~10-15 minutes

---

## 🎓 Learning Path

### Beginner (First Time User):
1. Read [QUICKSTART.md](QUICKSTART.md)
2. Open `index.html` and explore the dashboard
3. Try the Data Manager with [DATA-MANAGER-QUICKSTART.md](DATA-MANAGER-QUICKSTART.md)
4. Reference [README.md](README.md) for data updates

### Intermediate (Regular User):
1. Master monthly CSV updates via Data Manager
2. Learn manual data entry for other sections
3. Understand the tab navigation system
4. Explore [PROJECT-SUMMARY.md](PROJECT-SUMMARY.md) for all features

### Advanced (Customization):
1. Study `js/main.js` for dashboard logic
2. Review `css/style.css` for styling
3. Read feature-specific documentation for internals
4. Modify code as needed for custom requirements

---

## 🆘 Troubleshooting

### CSV Upload Issues:
→ See [DATA-MANAGER-GUIDE.md](DATA-MANAGER-GUIDE.md) → Troubleshooting section

### Chart Not Displaying:
→ Check browser console (F12) for errors
→ Verify data.js has valid JavaScript syntax
→ Ensure Chart.js CDN is loading

### Navigation Not Working:
→ See [TAB-NAVIGATION-COMPLETE.md](TAB-NAVIGATION-COMPLETE.md)
→ Check browser console for JavaScript errors

### Data Not Updating:
→ Hard refresh browser (Ctrl+Shift+R)
→ Verify data.js was saved after changes
→ Check data format matches examples in README

---

## 📊 Dashboard Statistics

- **Sections**: 4 (Training, Restaurant Visits, Weekly Wrap, SMO Connect)
- **KPI Cards**: 16 total across all sections
- **Charts**: 13 interactive charts
- **Data Points**: 100+ tracked metrics
- **Update Time**: 5-15 minutes per month
- **Documentation Files**: 20+ guides

---

## ✨ Recent Updates

### March 12, 2026 - Data Manager Released 🎉
- ✅ New CSV upload tool for Weekly Wrap data
- ✅ Automatic Franchisee email filtering
- ✅ CTR tracking added to dashboard
- ✅ Comprehensive documentation created
- ✅ 5-minute monthly update workflow

### March 11, 2026 - Training Updates
- ✅ Updated spotlight metrics
- ✅ Added initiative launch tracking
- ✅ 2026 vs 2025 comparison added

### March 10, 2026 - Tab Navigation
- ✅ Implemented click-based tab system
- ✅ Single section view
- ✅ Active tab highlighting

---

## 🎯 Key Features

### ⚡ Automation
- Automatic CSV filtering for Franchisee emails
- Automatic metric calculations
- Auto-updating charts and visualizations

### 🎨 Professional Design
- Subway brand colors and styling
- Responsive design (mobile & desktop)
- Print-friendly layouts
- Accessible (WCAG compliant)

### 📊 Rich Visualizations
- Line charts, bar charts, trend charts
- Interactive tooltips
- Smooth animations
- Color-coded metrics

### 🔒 Privacy & Security
- Client-side processing only
- No data uploads to servers
- No external API calls
- Safe for sensitive internal data

---

## 📞 Getting Help

### Documentation Questions:
- Check this index for relevant guide
- Read the quick start guide first
- Refer to specific feature documentation

### Technical Issues:
- Check troubleshooting sections
- Review browser console (F12)
- Verify file paths and syntax

### Feature Requests:
- Document desired functionality
- Consider existing tools first
- Review PROJECT-SUMMARY.md for capabilities

---

## 🎉 You're Ready!

This documentation covers everything you need to successfully use and maintain the Subway® Communications Metrics Dashboard.

**Start with**: [QUICKSTART.md](QUICKSTART.md) or [DATA-MANAGER-QUICKSTART.md](DATA-MANAGER-QUICKSTART.md)

---

**Documentation Version**: 2.0  
**Last Updated**: March 12, 2026  
**Status**: Complete ✅
