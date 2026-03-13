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
    // UKI: 63.12%, DE: 0% (excluded), NL: 65.75%, UKI HQ: 61.33% → Avg: 63.40%
    { month: 'Oct 2025', year: 2025, quarter: 'Q4', openRate: 63.40, recipients: 1397 },
    
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
