/**
 * DATA TEMPLATES - Copy & Paste These When Adding New Data
 * 
 * Simply copy the template you need, paste it into data.js,
 * and fill in your actual values.
 */

// ========================================
// TRAINING CAMPAIGN TEMPLATE
// ========================================
// Copy this and add to trainingCampaignsData array:
/*
{
    campaign: 'Campaign X',
    year: 2025,
    period: 'MMM 2025',
    participants: 0,
    completionRate: 0,
    status: 'completed'  // or 'planned'
}
*/

// Example - Adding Campaign 6 for Nov 2025:
/*
{
    campaign: 'Campaign 6',
    year: 2025,
    period: 'Nov 2025',
    participants: 420,
    completionRate: 94,
    status: 'completed'
}
*/

// ========================================
// RESTAURANT VISIT TEMPLATE
// ========================================
// Copy this and add to restaurantVisitsData array:
/*
{
    month: 'MMM 2025',
    visits: 0,
    avgScore: 0.0,
    highest: 0,
    lowest: 0
}
*/

// Example - Adding April 2025:
/*
{
    month: 'Apr 2025',
    visits: 75,
    avgScore: 89.5,
    highest: 99,
    lowest: 83
}
*/

// If this is the month the initiative launched, add:
/*
{
    month: 'Jun 2024',
    visits: 55,
    avgScore: 76.5,
    highest: 92,
    lowest: 65,
    initiativeLaunch: true  // ← Add this line
}
*/

// ========================================
// WEEKLY WRAP NEWSLETTER TEMPLATE
// ========================================
// Copy this and add to weeklyWrapData array:
/*
{
    week: 'Week X',
    date: 'MMM DD, YYYY',
    year: 2025,
    quarter: 'Q1',  // Q1, Q2, Q3, or Q4
    month: 'MMM',   // Jan, Feb, Mar, etc.
    openRate: 0.0,
    recipients: 0
}
*/

// Example - Adding Week 11 of 2025:
/*
{
    week: 'Week 11',
    date: 'Mar 17, 2025',
    year: 2025,
    quarter: 'Q1',
    month: 'Mar',
    openRate: 69.5,
    recipients: 1160
}
*/

// Quarter Reference:
// Q1 = Jan, Feb, Mar
// Q2 = Apr, May, Jun
// Q3 = Jul, Aug, Sep
// Q4 = Oct, Nov, Dec

// ========================================
// SMO CONNECT NEWSLETTER TEMPLATE
// ========================================
// Copy this and add to smoConnectData array:
/*
{
    month: 'MMM 2025',
    year: 2025,
    quarter: 'Q1',  // Q1, Q2, Q3, or Q4
    openRate: 0.0,
    recipients: 0
}
*/

// Example - Adding April 2025:
/*
{
    month: 'Apr 2025',
    year: 2025,
    quarter: 'Q2',
    openRate: 62.8,
    recipients: 995
}
*/

// ========================================
// QUICK REFERENCE
// ========================================

/*
MONTH ABBREVIATIONS (use these exactly):
Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec

QUARTERS:
Q1 = January through March
Q2 = April through June
Q3 = July through September
Q4 = October through December

STATUS VALUES (Training only):
'completed' - Campaign has finished with data
'planned'   - Future campaign, no data yet

PERCENTAGE VALUES:
- Enter as numbers (not with % symbol)
- Example: 85 means 85%
- Valid range: 0 to 100

IMPORTANT TIPS:
1. Always add commas between entries (except the last one)
2. Keep data in chronological order (oldest to newest)
3. Use quotes around text values
4. Don't use quotes around numbers
5. Save file after editing
6. Refresh browser to see updates
*/

// ========================================
// HOW TO ADD NEW DATA - STEP BY STEP
// ========================================

/*
STEP 1: Open js/data.js in a text editor

STEP 2: Find the array you want to update:
   - trainingCampaignsData (line ~11)
   - restaurantVisitsData (line ~58)
   - weeklyWrapData (line ~80)
   - smoConnectData (line ~160)

STEP 3: Scroll to the LAST entry in that array

STEP 4: Add a comma after the last closing }

STEP 5: Copy the template from this file

STEP 6: Paste it after the comma

STEP 7: Fill in your actual values

STEP 8: Save the file

STEP 9: Refresh your browser

EXAMPLE - Adding a new training campaign:

BEFORE:
    {
        campaign: 'Campaign 5',
        year: 2025,
        period: 'Oct 2025',
        participants: 400,
        completionRate: 0,
        status: 'planned'
    }
]

AFTER:
    {
        campaign: 'Campaign 5',
        year: 2025,
        period: 'Oct 2025',
        participants: 400,
        completionRate: 93,
        status: 'completed'
    },
    {
        campaign: 'Campaign 6',
        year: 2025,
        period: 'Dec 2025',
        participants: 420,
        completionRate: 95,
        status: 'completed'
    }
]

Notice:
- Comma added after Campaign 5
- New entry pasted below
- Values filled in
- NO comma after the last entry
*/

// ========================================
// COMMON MISTAKES TO AVOID
// ========================================

/*
❌ WRONG - Missing comma:
    { campaign: 'Campaign 5', ... }
    { campaign: 'Campaign 6', ... }  ← ERROR!

✅ CORRECT - Comma present:
    { campaign: 'Campaign 5', ... },
    { campaign: 'Campaign 6', ... }


❌ WRONG - Quotes on numbers:
    completionRate: "85"

✅ CORRECT - No quotes on numbers:
    completionRate: 85


❌ WRONG - No quotes on text:
    campaign: Campaign 6

✅ CORRECT - Quotes on text:
    campaign: 'Campaign 6'


❌ WRONG - Percentage symbol included:
    openRate: 85%

✅ CORRECT - Just the number:
    openRate: 85


❌ WRONG - Wrong quarter format:
    quarter: 'Quarter 1'

✅ CORRECT - Use Q1, Q2, Q3, Q4:
    quarter: 'Q1'
*/

// ========================================
// YOU'RE ALL SET! 🎉
// ========================================

/*
Now you have everything you need to easily update your dashboard data.
Just copy, paste, and fill in the values!

For more help, see:
- README.md (full documentation)
- QUICKSTART.md (quick reference)
*/
