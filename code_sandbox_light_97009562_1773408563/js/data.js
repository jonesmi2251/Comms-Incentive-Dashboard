/**
 * SUBWAY® COMMS METRICS DASHBOARD - DATA FILE
 * 
 * This file contains all the data for the dashboard.
 * Update this file with your real data - the dashboard will automatically recalculate everything.
 * 
 * All data arrays must be in chronological order (oldest to newest).
 */

// ========================================
// TRAINING COMPLETION INITIATIVE DATA
// ========================================
const trainingCampaignsData = [
    // 2024 Campaigns
    {
        campaign: 'C1 2024',
        year: 2024,
        period: 'Q1 2024',
        complete100First7: null,
        complete80First7: null,
        complete100ByLaunch: null,
        complete80ByLaunch: null,
        fullRegionByLaunch: null,
        status: 'completed'
    },
    {
        campaign: 'C2 2024',
        year: 2024,
        period: 'Q2 2024',
        complete100First7: null,
        complete80First7: null,
        complete100ByLaunch: null,
        complete80ByLaunch: null,
        fullRegionByLaunch: null,
        status: 'completed'
    },
    {
        campaign: 'C3 2024',
        year: 2024,
        period: 'Q3 2024',
        complete100First7: 127,
        complete80First7: 238,
        complete100ByLaunch: 267,
        complete80ByLaunch: 616,
        fullRegionByLaunch: 55,
        status: 'completed'
    },
    {
        campaign: 'C4 2024',
        year: 2024,
        period: 'Q4 2024',
        complete100First7: 77,
        complete80First7: 173,
        complete100ByLaunch: 401,
        complete80ByLaunch: 818,
        fullRegionByLaunch: 60,
        status: 'completed'
    },
    {
        campaign: 'C5 2024',
        year: 2024,
        period: 'Q4 2024',
        complete100First7: 160,
        complete80First7: 341,
        complete100ByLaunch: 495,
        complete80ByLaunch: 845,
        fullRegionByLaunch: 58,
        status: 'completed'
    },
    // 2025 Campaigns
    {
        campaign: 'C1 2025',
        year: 2025,
        period: 'Q1 2025',
        complete100First7: 105,
        complete80First7: 210,
        complete100ByLaunch: 476,
        complete80ByLaunch: 850,
        fullRegionByLaunch: 61,
        status: 'completed'
    },
    {
        campaign: 'C2 2025',
        year: 2025,
        period: 'Q2 2025',
        complete100First7: 222,
        complete80First7: 325,
        complete100ByLaunch: 656,
        complete80ByLaunch: 572,
        fullRegionByLaunch: 67,
        status: 'completed'
    },
    {
        campaign: 'C3 2025',
        year: 2025,
        period: 'Q3 2025',
        complete100First7: 376,
        complete80First7: 354,
        complete100ByLaunch: 811,
        complete80ByLaunch: 532,
        fullRegionByLaunch: 69,
        status: 'completed'
    },
    {
        campaign: 'C4 2025',
        year: 2025,
        period: 'Q4 2025',
        complete100First7: 216,
        complete80First7: 365,
        complete100ByLaunch: 1136,
        complete80ByLaunch: 1618,
        fullRegionByLaunch: 82,
        status: 'completed'
    },
    {
        campaign: 'C5 2025',
        year: 2025,
        period: 'Q4 2025',
        complete100First7: 333,
        complete80First7: 582,
        complete100ByLaunch: 1012,
        complete80ByLaunch: 1457,
        fullRegionByLaunch: 75,
        status: 'completed'
    },
    // 2026 Campaigns
    {
        campaign: 'C1 2026',
        year: 2026,
        period: 'Q1 2026',
        complete100First7: 479,
        complete80First7: 759,
        complete100ByLaunch: 1350,
        complete80ByLaunch: 1727,
        fullRegionByLaunch: 86.49,
        status: 'completed'
    },
    {
        campaign: 'C2 2026',
        year: 2026,
        period: 'Q2 2026',
        complete100First7: 684,
        complete80First7: 977,
        complete100ByLaunch: null,
        complete80ByLaunch: null,
        fullRegionByLaunch: null,
        status: 'in-progress'
    }
];

// ========================================
// RESTAURANT VISITS INITIATIVE DATA
// ========================================
const restaurantVisitsData = [
    // Pre-Initiative Months
    { month: 'Jan 2024', visits: 45, avgScore: 72.5, highest: 88, lowest: 58 },
    { month: 'Feb 2024', visits: 42, avgScore: 73.2, highest: 89, lowest: 60 },
    { month: 'Mar 2024', visits: 48, avgScore: 74.8, highest: 90, lowest: 62 },
    { month: 'Apr 2024', visits: 50, avgScore: 75.5, highest: 91, lowest: 64 },
    { month: 'May 2024', visits: 52, avgScore: 74.2, highest: 89, lowest: 61 },
    
    // Initiative Launched - June 2024
    { month: 'Jun 2024', visits: 55, avgScore: 76.5, highest: 92, lowest: 65, initiativeLaunch: true },
    { month: 'Jul 2024', visits: 58, avgScore: 78.2, highest: 93, lowest: 68 },
    { month: 'Aug 2024', visits: 60, avgScore: 79.8, highest: 94, lowest: 70 },
    { month: 'Sep 2024', visits: 62, avgScore: 81.5, highest: 95, lowest: 72 },
    { month: 'Oct 2024', visits: 65, avgScore: 83.2, highest: 96, lowest: 74 },
    { month: 'Nov 2024', visits: 63, avgScore: 84.5, highest: 97, lowest: 76 },
    { month: 'Dec 2024', visits: 60, avgScore: 85.8, highest: 97, lowest: 78 },
    { month: 'Jan 2025', visits: 68, avgScore: 86.5, highest: 98, lowest: 79 },
    { month: 'Feb 2025', visits: 70, avgScore: 87.2, highest: 98, lowest: 80 },
    { month: 'Mar 2025', visits: 72, avgScore: 88.5, highest: 99, lowest: 82 }
];

// ========================================
// WEEKLY WRAP NEWSLETTER DATA
// Real data from CSV - Franchisee emails only
// Tracking: Open Rate (%) and CTR (Click Through Rate %)
// ========================================
const weeklyWrapData = [
    // Jul 2025 - Q3
    { week: 31, date: 'Jul 30, 2025', year: 2025, quarter: 'Q3', month: 'Jul', openRate: 63.27, ctr: 8.82, recipients: 1089 },
    
    // Aug 2025 - Q3
    { week: 32, date: 'Aug 6, 2025', year: 2025, quarter: 'Q3', month: 'Aug', openRate: 62.74, ctr: 8.19, recipients: 1087 },
    { week: 33, date: 'Aug 13, 2025', year: 2025, quarter: 'Q3', month: 'Aug', openRate: 62.36, ctr: 5.35, recipients: 1084 },
    { week: 34, date: 'Aug 20, 2025', year: 2025, quarter: 'Q3', month: 'Aug', openRate: 64.28, ctr: 5.21, recipients: 1075 },
    { week: 35, date: 'Aug 27, 2025', year: 2025, quarter: 'Q3', month: 'Aug', openRate: 63.72, ctr: 6.51, recipients: 1075 },
    
    // Sep 2025 - Q3
    { week: 36, date: 'Sep 3, 2025', year: 2025, quarter: 'Q3', month: 'Sep', openRate: 61.09, ctr: 1.78, recipients: 1069 },
    { week: 37, date: 'Sep 10, 2025', year: 2025, quarter: 'Q3', month: 'Sep', openRate: 64.04, ctr: 4.96, recipients: 1068 },
    { week: 38, date: 'Sep 17, 2025', year: 2025, quarter: 'Q3', month: 'Sep', openRate: 63.80, ctr: 8.33, recipients: 1069 },
    { week: 39, date: 'Sep 24, 2025', year: 2025, quarter: 'Q3', month: 'Sep', openRate: 62.86, ctr: 6.08, recipients: 1069 },
    
    // Oct 2025 - Q4
    { week: 40, date: 'Oct 1, 2025', year: 2025, quarter: 'Q4', month: 'Oct', openRate: 62.18, ctr: 6.35, recipients: 1071 },
    { week: 41, date: 'Oct 8, 2025', year: 2025, quarter: 'Q4', month: 'Oct', openRate: 63.12, ctr: 6.82, recipients: 1071 },
    { week: 42, date: 'Oct 15, 2025', year: 2025, quarter: 'Q4', month: 'Oct', openRate: 63.61, ctr: 9.17, recipients: 1069 },
    { week: 43, date: 'Oct 22, 2025', year: 2025, quarter: 'Q4', month: 'Oct', openRate: 62.90, ctr: 5.61, recipients: 1070 },
    { week: 44, date: 'Oct 29, 2025', year: 2025, quarter: 'Q4', month: 'Oct', openRate: 54.86, ctr: 2.34, recipients: 1070 },
    
    // Nov 2025 - Q4
    { week: 45, date: 'Nov 5, 2025', year: 2025, quarter: 'Q4', month: 'Nov', openRate: 64.17, ctr: 3.09, recipients: 1069 },
    { week: 46, date: 'Nov 12, 2025', year: 2025, quarter: 'Q4', month: 'Nov', openRate: 65.86, ctr: 10.76, recipients: 1069 },
    { week: 47, date: 'Nov 19, 2025', year: 2025, quarter: 'Q4', month: 'Nov', openRate: 65.39, ctr: 4.94, recipients: 1072 },
    { week: 48, date: 'Nov 26, 2025', year: 2025, quarter: 'Q4', month: 'Nov', openRate: 57.88, ctr: 2.98, recipients: 1073 },
    
    // Dec 2025 - Q4
    { week: 49, date: 'Dec 3, 2025', year: 2025, quarter: 'Q4', month: 'Dec', openRate: 64.56, ctr: 8.84, recipients: 1075 },
    { week: 50, date: 'Dec 10, 2025', year: 2025, quarter: 'Q4', month: 'Dec', openRate: 59.55, ctr: 5.13, recipients: 1073 },
    { week: 51, date: 'Dec 17, 2025', year: 2025, quarter: 'Q4', month: 'Dec', openRate: 65.33, ctr: 5.02, recipients: 1076 },
    { week: 52, date: 'Dec 24, 2025', year: 2025, quarter: 'Q4', month: 'Dec', openRate: 61.58, ctr: 4.37, recipients: 1075 },
    
    // Jan 2026 - Q1
    { week: 2, date: 'Jan 7, 2026', year: 2026, quarter: 'Q1', month: 'Jan', openRate: 63.38, ctr: 4.46, recipients: 1076 },
    { week: 3, date: 'Jan 14, 2026', year: 2026, quarter: 'Q1', month: 'Jan', openRate: 65.40, ctr: 5.77, recipients: 1075 },
    { week: 4, date: 'Jan 19, 2026', year: 2026, quarter: 'Q1', month: 'Jan', openRate: 58.19, ctr: 12.57, recipients: 1074 },
    { week: 5, date: 'Jan 28, 2026', year: 2026, quarter: 'Q1', month: 'Jan', openRate: 59.91, ctr: 12.06, recipients: 1070 },
    
    // Feb 2026 - Q1
    { week: 6, date: 'Feb 4, 2026', year: 2026, quarter: 'Q1', month: 'Feb', openRate: 66.45, ctr: 12.56, recipients: 1067 },
    { week: 7, date: 'Feb 11, 2026', year: 2026, quarter: 'Q1', month: 'Feb', openRate: 63.54, ctr: 7.97, recipients: 1067 },
    { week: 8, date: 'Feb 18, 2026', year: 2026, quarter: 'Q1', month: 'Feb', openRate: 43.11, ctr: 8.53, recipients: 1067 },
    { week: 9, date: 'Feb 25, 2026', year: 2026, quarter: 'Q1', month: 'Feb', openRate: 62.01, ctr: 8.26, recipients: 1066 },
    
    // Mar 2026 - Q1
    { week: 10, date: 'Mar 4, 2026', year: 2026, quarter: 'Q1', month: 'Mar', openRate: 61.62, ctr: 4.99, recipients: 1063 },
    { week: 11, date: 'Mar 11, 2026', year: 2026, quarter: 'Q1', month: 'Mar', openRate: 55.80, ctr: 5.75, recipients: 1061 }
];


// ========================================
// SMO CONNECT NEWSLETTER DATA
// Real data from CSV - All SMO Connect emails (excluding 0 open rate)
// Tracking: Open Rate (%) - Monthly email performance
// Source: Send Time column determines the month
// Last updated: Mar 12, 2026
// ========================================
const smoConnectData = [
    // 2025 Data
    { month: 'Jan 2025', year: 2025, quarter: 'Q1', openRate: 58.00, recipients: 1100 },
    { month: 'Feb 2025', year: 2025, quarter: 'Q1', openRate: 59.36, recipients: 1100 },
    { month: 'Mar 2025', year: 2025, quarter: 'Q1', openRate: 59.00, recipients: 1100 },
    { month: 'Apr 2025', year: 2025, quarter: 'Q2', openRate: 56.00, recipients: 1100 },
    { month: 'May 2025', year: 2025, quarter: 'Q2', openRate: 56.00, recipients: 1090 },
    { month: 'Jun 2025', year: 2025, quarter: 'Q2', openRate: 52.00, recipients: 1090 },
    { month: 'Jul 2025', year: 2025, quarter: 'Q3', openRate: 52.25, recipients: 1080 },
    
    // Sep 2025 - Multiple regions averaged
    // DE: 64.50%, NL: 65.49%, UKI: 63.12% → Avg: 64.37%
    { month: 'Sep 2025', year: 2025, quarter: 'Q3', openRate: 64.37, recipients: 1644 },
    
    // Oct 2025 - Multiple regions averaged
    // UKI: 51.92%, NL: 65.75%, UKI HQ: 61.33% → Avg: 59.67%
    { month: 'Oct 2025', year: 2025, quarter: 'Q4', openRate: 59.67, recipients: 1397 },
    
    // Nov 2025 - Multiple regions averaged
    // UKI: 52.84%, DE: 63.59%, NL: 53.38% → Avg: 56.60%
    { month: 'Nov 2025', year: 2025, quarter: 'Q4', openRate: 56.60, recipients: 1831 },
    
    // Dec 2025 - Multiple regions averaged (excluding 0 open rates)
    // UKI: 53.77%, NL: 71.22%, DE: 55.88%, UKI HQ: 57.47% → Avg: 59.59%
    { month: 'Dec 2025', year: 2025, quarter: 'Q4', openRate: 59.59, recipients: 1805 },
    
    // 2026 Data
    // Jan 2026 - Multiple regions averaged
    // UKI: 43.26%, NL: 35.88%, DE: 64.68% → Avg: 47.94%
    { month: 'Jan 2026', year: 2026, quarter: 'Q1', openRate: 47.94, recipients: 1618 },
    
    // Feb 2026 - HQ only
    // UKI HQ: 71.35%
    { month: 'Feb 2026', year: 2026, quarter: 'Q1', openRate: 71.35, recipients: 178 },
    
    // Mar 2026 - Multiple regions averaged
    // DE: 62.77%, NL: 64.18%, UKI: 61.62% → Avg: 62.86%
    { month: 'Mar 2026', year: 2026, quarter: 'Q1', openRate: 62.86, recipients: 1608 },
];
