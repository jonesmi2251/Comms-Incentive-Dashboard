# 🥖 Subway® Communications Metrics Dashboard

A professional, interactive dashboard for tracking Subway communications initiatives with full brand styling.

## 📊 Dashboard Sections

### 1. Training Completion Initiative
Tracks training completion rates within the first 7 days of training going live.

**Metrics:**
- Latest completion rate
- Total improvement since first campaign
- Average completion across all campaigns
- Campaign-by-campaign tracking

**Visualizations:**
- Line chart showing completion rate trend
- Year-over-year bar chart comparison
- Detailed data table with status badges

### 2. Restaurant Visits Initiative
Tracks monthly restaurant evaluation scores to measure quality improvement.

**Metrics:**
- Current average evaluation score
- Total improvement since initiative launch
- Overall average across all months
- Highest and lowest scores per month

**Visualizations:**
- Multi-line trend chart (Average, Highest, Lowest)
- Detailed monthly performance table

### 3. Weekly Wrap Newsletter
Tracks open rates for weekly email communications.

**Metrics:**
- Latest open rate
- Year-over-year comparison (same week last year)
- Quarter-over-quarter comparison
- Month-over-month comparison

**Visualizations:**
- Weekly trend line chart
- Year-over-year monthly averages bar chart
- Quarterly averages trend chart
- Summary statistics cards

### 4. SMO Connect Newsletter
Tracks open rates for monthly email communications.

**Metrics:**
- Latest open rate
- Year-over-year comparison (same month last year)
- Quarter-over-quarter comparison
- Month-over-month comparison

**Visualizations:**
- Monthly trend line chart
- Year-over-year bar chart comparison
- Quarterly averages trend chart
- Summary statistics cards

## 🎨 Subway Branding

The dashboard uses official Subway brand colors throughout:

- **Primary Green**: `#009743` - Headers, charts, primary elements
- **Accent Yellow**: `#FFC600` - Highlights, badges, accents
- **White**: `#FFFFFF` - Clean backgrounds

## 📁 Project Structure

```
subway-comms-dashboard/
├── index.html              # Main dashboard page
├── README.md              # This file
├── css/
│   └── style.css          # Subway-branded styles
└── js/
    ├── data.js            # All dashboard data (UPDATE THIS!)
    └── main.js            # Dashboard logic & charts
```

## 🚀 Getting Started

### Viewing the Dashboard

1. Open `index.html` in any modern web browser
2. The dashboard will load with the Training section visible
3. **Click on navigation tabs** to switch between sections:
   - Training Completion Initiative
   - Restaurant Visits
   - Weekly Wrap Newsletter
   - SMO Connect Newsletter
4. Only one section is displayed at a time (tab-based navigation)

### Updating with Your Data

**All data is stored in `js/data.js`** - this is the only file you need to edit!

#### 1. Training Campaigns Data

Find the `trainingCampaignsData` array and update it:

```javascript
{
    campaign: 'Campaign 1',
    year: 2025,
    period: 'Jan 2025',
    participants: 340,
    completionRate: 85,
    status: 'completed'  // or 'planned'
}
```

#### 2. Restaurant Visits Data

Find the `restaurantVisitsData` array and update it:

```javascript
{
    month: 'Jan 2025',
    visits: 68,
    avgScore: 86.5,
    highest: 98,
    lowest: 79,
    initiativeLaunch: false  // set to true for launch month
}
```

#### 3. Weekly Wrap Newsletter Data

**🚀 NEW: Use the Data Manager Tool!**

The easiest way to update Weekly Wrap data is to use the built-in **Data Manager** tool:

1. Click **"Data Manager"** button in the dashboard header (top-right)
2. Upload your monthly CSV file (format: `all-emails-full-MM-DD-YYYY.csv`)
3. The tool will automatically:
   - Filter to include only **Franchisee** emails (Franchisee, Franchisees, FZE, FZEs, FZES)
   - Extract **Open Rate** and **CTR** data
   - Generate properly formatted JavaScript code
4. Copy the generated code and paste it into `js/data.js`

**📖 Detailed Instructions**: See [DATA-MANAGER-GUIDE.md](DATA-MANAGER-GUIDE.md)

**Manual Update Option:**

Find the `weeklyWrapData` array and update it:

```javascript
{
    week: 1,
    date: 'Jan 6, 2025',
    year: 2025,
    quarter: 'Q1',
    month: 'Jan',
    openRate: 63.5,
    ctr: 8.2,
    recipients: 1110
}
```

#### 4. SMO Connect Newsletter Data

Find the `smoConnectData` array and update it:

```javascript
{
    month: 'Jan 2025',
    year: 2025,
    quarter: 'Q1',
    openRate: 58.5,
    recipients: 980
}
```

### After Updating Data

1. Save the `js/data.js` file
2. Refresh your browser
3. All charts and metrics will automatically recalculate!

### 📊 Data Manager Tool

The dashboard includes a specialized **Data Manager** tool (`data-manager.html`) for easy CSV uploads:

**Features:**
- 📁 **Drag & drop CSV uploads** - Easy file handling
- 🔍 **Automatic filtering** - Includes only Franchisee emails
- 📊 **Live preview** - See filtered data before updating
- 📈 **Statistics summary** - Average rates, totals, and more
- 📋 **One-click copy** - Copy generated code instantly
- 💾 **Download option** - Save as .js file

**Access**: Click the "Data Manager" button in the dashboard header or open `data-manager.html` directly.

**Full Guide**: See [DATA-MANAGER-GUIDE.md](DATA-MANAGER-GUIDE.md) for complete instructions.

## ✨ Features

### Interactive Charts
- **Hover tooltips** - Detailed information on hover
- **Smooth animations** - Professional transitions
- **Responsive design** - Works on all devices
- **Chart.js powered** - Industry-standard charting library

### Automatic Calculations
- **Percentage changes** - Calculated automatically
- **Trend indicators** - Up/down arrows
- **Status badges** - Color-coded performance
- **Statistical summaries** - Averages, totals, improvements

### Navigation
- **Sticky header** - Always accessible
- **Tab-based sections** - Click tabs to switch between sections
- **Single section view** - Focus on one metric area at a time
- **Active highlighting** - Shows currently selected section

### Professional Design
- **Subway branding** - Official colors and style
- **Clean layout** - Easy to read and understand
- **Print-friendly** - Optimized for reports
- **Accessibility** - WCAG compliant

## 📈 Example Data Included

The dashboard comes with realistic example data:

### Training Campaigns
- **10 campaigns** (5 from 2024, 5 from 2025)
- Shows improvement from 62% → 91%
- Demonstrates clear upward trend

### Restaurant Visits
- **15 months** of data (Jan 2024 → Mar 2025)
- Initiative launched June 2024
- Shows improvement from 72.5% → 88.5%

### Weekly Wrap Newsletter
- **62 weeks** of data (2024 full year + Q1 2025)
- Shows improvement from 35.2% → 68.8%
- Year-over-year, quarterly, and monthly comparisons

### SMO Connect Newsletter
- **15 months** of data (2024 full year + Q1 2025)
- Shows improvement from 42.5% → 61.2%
- Year-over-year, quarterly, and monthly comparisons

## 🛠️ Technical Details

### Technologies Used
- **HTML5** - Semantic structure
- **CSS3** - Modern styling with Flexbox & Grid
- **JavaScript (ES6+)** - Interactive functionality
- **Chart.js 4.4.0** - Data visualizations
- **Font Awesome 6.4.0** - Icons
- **Google Fonts (Inter)** - Typography

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### No Server Required
This is a static website that runs entirely in the browser. No backend, database, or server needed!

## 📝 Data Management Tips

### Keep Data Organized
1. **Chronological order** - Always add newest data at the end
2. **Consistent formats** - Use the same date formats throughout
3. **Regular updates** - Update data after each campaign/month
4. **Backup your data** - Keep a copy of `data.js` somewhere safe

### Data Validation
- **Completion rates** - Should be 0-100
- **Open rates** - Should be 0-100
- **Status** - Use 'completed' or 'planned' only
- **Dates** - Use consistent format (e.g., 'Jan 2025')

### Adding New Data

#### Adding a New Campaign:
```javascript
trainingCampaignsData.push({
    campaign: 'Campaign 6',
    year: 2025,
    period: 'Nov 2025',
    participants: 420,
    completionRate: 94,
    status: 'completed'
});
```

#### Adding a New Month:
```javascript
restaurantVisitsData.push({
    month: 'Apr 2025',
    visits: 75,
    avgScore: 89.2,
    highest: 99,
    lowest: 83
});
```

#### Adding a New Week:
```javascript
weeklyWrapData.push({
    week: 'Week 11',
    date: 'Mar 17, 2025',
    year: 2025,
    quarter: 'Q1',
    month: 'Mar',
    openRate: 69.5,
    recipients: 1160
});
```

## 🎯 Customization Options

### Changing Colors

Edit `css/style.css` and update the color variables:

```css
:root {
    --subway-green: #009743;
    --subway-yellow: #FFC600;
    /* ... other variables ... */
}
```

### Modifying Chart Styles

Edit `js/main.js` and update the chart configuration:

```javascript
borderColor: SUBWAY_GREEN,
backgroundColor: `${SUBWAY_GREEN}20`,
borderWidth: 3,
```

### Adding New Sections

1. Add HTML structure in `index.html`
2. Add navigation link
3. Add data array in `data.js`
4. Create initialization function in `main.js`
5. Call function in `DOMContentLoaded` event

## 📊 Metrics Glossary

### Training Initiative
- **Completion Rate** - Percentage of participants who completed training within 7 days
- **Campaign** - A training initiative period
- **Status** - Either 'completed' (has data) or 'planned' (future campaign)

### Restaurant Visits
- **Visits** - Number of restaurant evaluations conducted
- **Average Score** - Mean evaluation score for the month
- **Highest/Lowest** - Best and worst scores in that month

### Email Newsletters
- **Open Rate** - Percentage of recipients who opened the email
- **Recipients** - Number of people who received the email
- **YoY** - Year-over-year comparison
- **QoQ** - Quarter-over-quarter comparison
- **MoM** - Month-over-month comparison

## 🔄 Update Frequency

Recommended update schedule:

- **Training Campaigns** - After each campaign completes
- **Restaurant Visits** - Monthly (after all visits are complete)
- **Weekly Wrap** - Weekly (every Monday)
- **SMO Connect** - Monthly (after each send)

## 📱 Mobile Responsive

The dashboard is fully responsive and works on:
- Desktop computers
- Tablets (iPad, Android tablets)
- Mobile phones (iPhone, Android)
- Print (optimized for reports)

## 🐛 Troubleshooting

### Charts not displaying
- Check browser console for errors (F12)
- Ensure all data arrays are valid JSON
- Verify all fields are present in data objects

### Data not updating
- Clear browser cache (Ctrl+Shift+Delete)
- Ensure you saved `data.js`
- Check for syntax errors in the data file

### Navigation not working
- Ensure all section IDs match navigation hrefs
- Check that JavaScript is enabled in browser

## 💡 Best Practices

1. **Backup regularly** - Keep copies of your data
2. **Update consistently** - Maintain regular update schedule
3. **Validate data** - Double-check numbers before adding
4. **Test changes** - Always preview after updates
5. **Document anomalies** - Note unusual data points

## 🚀 Deployment

### Option 1: Local Network
1. Place all files in a shared network folder
2. Team members open `index.html` from the network location

### Option 2: Web Hosting
1. Upload all files to a web server (any static hosting)
2. Access via the server URL
3. Examples: GitHub Pages, Netlify, Vercel

### Option 3: SharePoint
1. Upload files to SharePoint document library
2. Create a page with embedded web part pointing to `index.html`

## 📞 Support

For questions or issues:
1. Check this README first
2. Review the example data in `js/data.js`
3. Inspect the browser console for errors
4. Validate your JSON syntax

## 📄 License

This dashboard is built with open-source technologies:
- Chart.js (MIT License)
- Font Awesome (Free License)
- Google Fonts (Open Font License)

## 🎉 Credits

Built with:
- Modern web standards
- Best practices in data visualization
- Subway brand guidelines
- User-centric design principles

---

**Made fresh daily!** 🥖 Just like Subway sandwiches, this dashboard is built fresh and ready to serve your data needs.

## Quick Reference Card

| Task | File to Edit | What to Change |
|------|-------------|----------------|
| Update training data | `js/data.js` | `trainingCampaignsData` array |
| Update restaurant data | `js/data.js` | `restaurantVisitsData` array |
| Update Weekly Wrap data | `js/data.js` | `weeklyWrapData` array |
| Update SMO Connect data | `js/data.js` | `smoConnectData` array |
| Change colors | `css/style.css` | `:root` variables |
| Modify charts | `js/main.js` | Chart configuration objects |

**Remember:** Always save your file and refresh your browser after making changes!
