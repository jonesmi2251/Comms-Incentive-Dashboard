/**
 * SUBWAY® COMMS METRICS DASHBOARD - MAIN JAVASCRIPT
 * 
 * This file handles all dashboard functionality:
 * - Chart rendering with Chart.js
 * - KPI calculations
 * - Table population
 * - Navigation and interactivity
 */

// ========================================
// GLOBAL VARIABLES & CONFIGURATION
// ========================================

// Subway brand colors
const SUBWAY_GREEN = '#009743';
const SUBWAY_GREEN_DARK = '#007535';
const SUBWAY_YELLOW = '#FFC600';
const SUBWAY_YELLOW_DARK = '#e6b200';

// Chart default configuration
Chart.defaults.font.family = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
Chart.defaults.color = '#666666';

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Format number as percentage with + or - sign
 */
function formatPercentage(num, showSign = false) {
    const sign = showSign && num > 0 ? '+' : '';
    return `${sign}${num.toFixed(1)}%`;
}

/**
 * Calculate percentage change between two values
 */
function calculateChange(current, previous) {
    if (!previous || previous === 0) return 0;
    return ((current - previous) / previous) * 100;
}

/**
 * Get change indicator HTML (up/down arrow)
 */
function getChangeIndicator(change) {
    if (change > 0) {
        return `<span class="trend-arrow trend-up">↗</span>${formatPercentage(Math.abs(change), true)}`;
    } else if (change < 0) {
        return `<span class="trend-arrow trend-down">↘</span>${formatPercentage(-Math.abs(change), true)}`;
    } else {
        return `<span class="trend-arrow trend-neutral">→</span>0%`;
    }
}

/**
 * Get status badge HTML based on completion rate
 */
function getStatusBadge(rate) {
    if (rate >= 90) return '<span class="status-badge status-excellent">Excellent</span>';
    if (rate >= 75) return '<span class="status-badge status-good">Good</span>';
    if (rate > 0) return '<span class="status-badge status-improving">Improving</span>';
    return '<span class="status-badge status-planned">Planned</span>';
}

/**
 * Calculate average of an array of numbers
 */
function calculateAverage(numbers) {
    const filtered = numbers.filter(n => n > 0);
    if (filtered.length === 0) return 0;
    return filtered.reduce((sum, num) => sum + num, 0) / filtered.length;
}

/**
 * Group data by year
 */
function groupByYear(data, yearField = 'year') {
    return data.reduce((acc, item) => {
        const year = item[yearField];
        if (!acc[year]) acc[year] = [];
        acc[year].push(item);
        return acc;
    }, {});
}

/**
 * Group data by quarter
 */
function groupByQuarter(data) {
    return data.reduce((acc, item) => {
        const key = `${item.year}-${item.quarter}`;
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
    }, {});
}

/**
 * Group data by month
 */
function groupByMonth(data) {
    return data.reduce((acc, item) => {
        const key = `${item.year}-${item.month}`;
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
    }, {});
}

// ========================================
// SECTION 1: TRAINING COMPLETION INITIATIVE
// Updated for comprehensive metrics tracking
// ========================================

function initTrainingSection() {
    // Filter campaigns with data
    const campaignsWithData = trainingCampaignsData.filter(c => 
        c.fullRegionByLaunch !== null && c.status !== 'planned'
    );
    
    if (campaignsWithData.length === 0) {
        console.warn('No training campaign data available');
        return;
    }
    
    const latestCampaign = campaignsWithData[campaignsWithData.length - 1];
    const previousCampaign = campaignsWithData.length > 1 ? campaignsWithData[campaignsWithData.length - 2] : null;
    
    // Update KPI cards
    document.getElementById('trainingLatestRegion').textContent = 
        latestCampaign.fullRegionByLaunch ? `${latestCampaign.fullRegionByLaunch.toFixed(1)}%` : '-';
    
    // Update latest campaign name
    if (document.getElementById('trainingLatestCampaign')) {
        document.getElementById('trainingLatestCampaign').textContent = latestCampaign.campaign;
    }
    
    // Add trend arrow for Latest Region Completion
    if (previousCampaign && previousCampaign.fullRegionByLaunch && latestCampaign.fullRegionByLaunch) {
        const regionChange = calculateChange(latestCampaign.fullRegionByLaunch, previousCampaign.fullRegionByLaunch);
        document.getElementById('trainingLatestChange').innerHTML = 
            `${getChangeIndicator(regionChange)} vs previous campaign`;
    }
    
    document.getElementById('trainingLatest100First7').textContent = 
        latestCampaign.complete100First7 || '-';
    
    document.getElementById('trainingLatest80Launch').textContent = 
        latestCampaign.complete80ByLaunch || '-';
    
    // Calculate 100% First 7 Days comparison with previous campaign
    if (previousCampaign && previousCampaign.complete100First7 && latestCampaign.complete100First7) {
        const diff100First7 = latestCampaign.complete100First7 - previousCampaign.complete100First7;
        const percentChange = previousCampaign.complete100First7 > 0 
            ? (diff100First7 / previousCampaign.complete100First7) * 100 
            : 0;
        
        document.getElementById('training100First7Change').innerHTML = 
            `${getChangeIndicator(percentChange)} vs previous campaign`;
    }
    
    // Calculate 80% By Launch comparison with previous campaign
    if (previousCampaign && previousCampaign.complete80ByLaunch && latestCampaign.complete80ByLaunch) {
        const diff80Launch = latestCampaign.complete80ByLaunch - previousCampaign.complete80ByLaunch;
        const percentChange = previousCampaign.complete80ByLaunch > 0
            ? (diff80Launch / previousCampaign.complete80ByLaunch) * 100
            : 0;
        
        document.getElementById('training80LaunchChange').innerHTML = 
            `${getChangeIndicator(percentChange)} vs previous campaign`;
    }
    
    // Calculate Total Improvement: Everything from C2 2025 onwards vs everything before C2 2025
    const preInitiativeCampaigns = trainingCampaignsData.filter(c => 
        c.complete100First7 !== null && 
        (c.year === 2024 || (c.year === 2025 && c.campaign === 'C1 2025'))
    );
    
    const postInitiativeCampaigns = trainingCampaignsData.filter(c => 
        c.complete100First7 !== null &&
        (c.year === 2025 && c.campaign !== 'C1 2025') || c.year === 2026
    );
    
    if (preInitiativeCampaigns.length > 0 && postInitiativeCampaigns.length > 0) {
        const preInitiativeAvg = calculateAverage(preInitiativeCampaigns.map(c => c.complete100First7));
        const postInitiativeAvg = calculateAverage(postInitiativeCampaigns.map(c => c.complete100First7));
        const improvement = ((postInitiativeAvg - preInitiativeAvg) / preInitiativeAvg) * 100;
        
        document.getElementById('trainingTotalImprovement').textContent = `+${improvement.toFixed(1)}%`;
    } else {
        document.getElementById('trainingTotalImprovement').textContent = '-';
    }
    
    document.getElementById('trainingImprovementDetail').textContent = 'Since initiative launch';
    
    // Render charts
    renderTrainingRegionChart();
    renderTraining100Chart();
    renderTraining80Chart();
    
    // Populate table
    populateTrainingTable();
}

function renderTrainingRegionChart() {
    const ctx = document.getElementById('trainingRegionChart');
    if (!ctx) return;
    
    const campaignsWithData = trainingCampaignsData.filter(c => c.fullRegionByLaunch !== null);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: campaignsWithData.map(c => c.campaign),
            datasets: [
                {
                    label: 'Full Region Completion %',
                    data: campaignsWithData.map(c => c.fullRegionByLaunch),
                    borderColor: SUBWAY_GREEN,
                    backgroundColor: `${SUBWAY_GREEN}20`,
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 6,
                    pointHoverRadius: 9,
                    pointBackgroundColor: SUBWAY_YELLOW,
                    pointBorderColor: SUBWAY_GREEN,
                    pointBorderWidth: 2
                },
                {
                    label: 'Target (80%)',
                    data: Array(campaignsWithData.length).fill(80),
                    borderColor: '#FF6B35',
                    borderWidth: 2,
                    borderDash: [10, 5],
                    fill: false,
                    pointRadius: 0,
                    pointHoverRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        font: {
                            size: 12,
                            weight: 'bold'
                        },
                        padding: 15,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    backgroundColor: SUBWAY_GREEN,
                    titleColor: SUBWAY_YELLOW,
                    bodyColor: '#ffffff',
                    borderColor: SUBWAY_YELLOW,
                    borderWidth: 2,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: (context) => {
                            if (context.datasetIndex === 0) {
                                return `Region Completion: ${context.parsed.y.toFixed(1)}%`;
                            }
                            return null;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: (value) => value + '%'
                    },
                    grid: {
                        color: '#e0e0e0'
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            }
        }
    });
}

function renderTraining100Chart() {
    const ctx = document.getElementById('training100Chart');
    if (!ctx) return;
    
    const campaignsWithData = trainingCampaignsData.filter(c => c.complete100First7 !== null);
    
    // Create colors array with special highlight for incentive launch campaigns
    const backgroundColors = campaignsWithData.map(c => {
        if (c.campaign === 'C2 2025') return SUBWAY_GREEN; // Incentive Launch
        if (c.campaign === 'C1 2026') return '#FFA500'; // Incentive Expanded (Orange)
        return SUBWAY_YELLOW; // Regular
    });
    
    const borderColors = campaignsWithData.map(c => {
        if (c.campaign === 'C2 2025') return SUBWAY_GREEN_DARK;
        if (c.campaign === 'C1 2026') return '#FF8C00';
        return SUBWAY_YELLOW_DARK;
    });
    
    const borderWidths = campaignsWithData.map(c => {
        if (c.campaign === 'C2 2025' || c.campaign === 'C1 2026') return 4; // Thicker border for incentive launches
        return 2;
    });
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: campaignsWithData.map(c => c.campaign),
            datasets: [
                {
                    label: '100% First 7 Days',
                    data: campaignsWithData.map(c => c.complete100First7),
                    backgroundColor: backgroundColors,
                    borderColor: borderColors,
                    borderWidth: borderWidths
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: SUBWAY_GREEN,
                    titleColor: SUBWAY_YELLOW,
                    bodyColor: '#ffffff',
                    borderColor: SUBWAY_YELLOW,
                    borderWidth: 2,
                    padding: 12,
                    callbacks: {
                        title: (context) => {
                            const campaign = campaignsWithData[context[0].dataIndex].campaign;
                            if (campaign === 'C2 2025') return campaign + ' 🎯 Incentive Launched';
                            if (campaign === 'C1 2026') return campaign + ' 🚀 Incentive Expanded';
                            return campaign;
                        },
                        label: (context) => `Restaurants: ${context.parsed.y}`
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Restaurants',
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    },
                    ticks: {
                        callback: (value) => value
                    },
                    grid: {
                        color: '#e0e0e0'
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45,
                        callback: function(value, index) {
                            const campaign = campaignsWithData[index].campaign;
                            // Add labels below bars for incentive launches
                            if (campaign === 'C2 2025') {
                                return [campaign, '🎯 Launch'];
                            }
                            if (campaign === 'C1 2026') {
                                return [campaign, '🚀 Expand'];
                            }
                            return campaign;
                        },
                        font: {
                            size: 11
                        }
                    }
                }
            }
        }
    });
}

function renderTraining80Chart() {
    const ctx = document.getElementById('training80Chart');
    if (!ctx) return;
    
    // Group campaigns by number (C1, C2, C3, etc.) across years
    const campaignGroups = {
        'C1': [],
        'C2': [],
        'C3': [],
        'C4': [],
        'C5': []
    };
    
    trainingCampaignsData.forEach(campaign => {
        // Extract campaign number (C1, C2, etc.)
        const campaignNum = campaign.campaign.split(' ')[0];
        if (campaignGroups[campaignNum]) {
            campaignGroups[campaignNum].push(campaign);
        }
    });
    
    // Create datasets for each year
    const years = [2024, 2025, 2026];
    const colors = {
        2024: '#4A90E2',
        2025: SUBWAY_GREEN,
        2026: SUBWAY_YELLOW
    };
    
    const datasets = years.map(year => {
        return {
            label: String(year),
            data: ['C1', 'C2', 'C3', 'C4', 'C5'].map(campaignNum => {
                const campaign = campaignGroups[campaignNum].find(c => c.year === year);
                return campaign ? campaign.complete100ByLaunch : null;
            }),
            backgroundColor: colors[year],
            borderColor: colors[year],
            borderWidth: 2
        };
    });
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['C1', 'C2', 'C3', 'C4', 'C5'],
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 12,
                            weight: 'bold'
                        },
                        padding: 15
                    }
                },
                tooltip: {
                    backgroundColor: SUBWAY_GREEN,
                    titleColor: SUBWAY_YELLOW,
                    bodyColor: '#ffffff',
                    borderColor: SUBWAY_YELLOW,
                    borderWidth: 2,
                    padding: 12,
                    callbacks: {
                        label: (context) => {
                            if (context.parsed.y === null) {
                                return `${context.dataset.label}: No data yet`;
                            }
                            return `${context.dataset.label}: ${context.parsed.y}`;
                        },
                        title: (context) => {
                            return `Campaign ${context[0].label}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: (value) => value
                    },
                    grid: {
                        color: '#e0e0e0'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function populateTrainingTable() {
    const tbody = document.getElementById('trainingTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    trainingCampaignsData.forEach((campaign) => {
        const getStatusBadge = (status) => {
            if (status === 'completed') return '<span class="status-badge status-excellent">Completed</span>';
            if (status === 'in-progress') return '<span class="status-badge status-good">In Progress</span>';
            return '<span class="status-badge status-planned">Planned</span>';
        };
        
        const formatValue = (val) => {
            if (val === null || val === undefined) return '-';
            return typeof val === 'number' ? val : '-';
        };
        
        const formatPercent = (val) => {
            if (val === null || val === undefined) return '-';
            return typeof val === 'number' ? `${val.toFixed(1)}%` : '-';
        };
        
        const row = `
            <tr>
                <td><strong>${campaign.campaign}</strong></td>
                <td>${formatValue(campaign.complete100First7)}</td>
                <td>${formatValue(campaign.complete100ByLaunch)}</td>
                <td><strong>${formatPercent(campaign.fullRegionByLaunch)}</strong></td>
                <td>${getStatusBadge(campaign.status)}</td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// ========================================
// SECTION 2: RESTAURANT VISITS INITIATIVE
// ========================================

function initRestaurantSection() {
    // Calculate KPIs
    const latestMonth = restaurantVisitsData[restaurantVisitsData.length - 1];
    const previousMonth = restaurantVisitsData[restaurantVisitsData.length - 2];
    const firstMonth = restaurantVisitsData[0];
    
    const currentScore = latestMonth.avgScore;
    const currentChange = calculateChange(latestMonth.avgScore, previousMonth.avgScore);
    const totalImprovement = currentScore - firstMonth.avgScore;
    const overallAverage = calculateAverage(restaurantVisitsData.map(m => m.avgScore));
    
    // Update KPI cards
    document.getElementById('restaurantCurrentScore').textContent = formatPercentage(currentScore);
    document.getElementById('restaurantCurrentChange').innerHTML = getChangeIndicator(currentChange);
    document.getElementById('restaurantCurrentChange').className = currentChange >= 0 ? 'kpi-change positive' : 'kpi-change negative';
    document.getElementById('restaurantTotalImprovement').textContent = formatPercentage(totalImprovement, true);
    document.getElementById('restaurantOverallAverage').textContent = formatPercentage(overallAverage);
    document.getElementById('restaurantMonthsTracked').textContent = restaurantVisitsData.length;
    
    // Render charts
    renderRestaurantTrendChart();
    
    // Populate table
    populateRestaurantTable();
}

function renderRestaurantTrendChart() {
    const ctx = document.getElementById('restaurantTrendChart');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: restaurantVisitsData.map(m => m.month),
            datasets: [
                {
                    label: 'Average Score',
                    data: restaurantVisitsData.map(m => m.avgScore),
                    borderColor: SUBWAY_GREEN,
                    backgroundColor: `${SUBWAY_GREEN}20`,
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 5,
                    pointHoverRadius: 8,
                    pointBackgroundColor: SUBWAY_YELLOW,
                    pointBorderColor: SUBWAY_GREEN,
                    pointBorderWidth: 2
                },
                {
                    label: 'Highest Score',
                    data: restaurantVisitsData.map(m => m.highest),
                    borderColor: '#4CAF50',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0.4,
                    pointRadius: 3,
                    pointHoverRadius: 6
                },
                {
                    label: 'Lowest Score',
                    data: restaurantVisitsData.map(m => m.lowest),
                    borderColor: '#FF9800',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0.4,
                    pointRadius: 3,
                    pointHoverRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        padding: 20
                    }
                },
                tooltip: {
                    backgroundColor: SUBWAY_GREEN,
                    titleColor: SUBWAY_YELLOW,
                    bodyColor: '#ffffff',
                    borderColor: SUBWAY_YELLOW,
                    borderWidth: 2,
                    padding: 12,
                    callbacks: {
                        label: (context) => `${context.dataset.label}: ${context.parsed.y.toFixed(1)}%`
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 50,
                    max: 100,
                    ticks: {
                        callback: (value) => value + '%'
                    },
                    grid: {
                        color: '#e0e0e0'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function populateRestaurantTable() {
    const tbody = document.getElementById('restaurantTableBody');
    tbody.innerHTML = '';
    
    restaurantVisitsData.forEach((month, index) => {
        const previousMonth = restaurantVisitsData[index - 1];
        const change = previousMonth ? calculateChange(month.avgScore, previousMonth.avgScore) : 0;
        
        const row = `
            <tr>
                <td><strong>${month.month}</strong>${month.initiativeLaunch ? ' <span style="color: ' + SUBWAY_YELLOW + '; font-weight: bold;">★ Initiative Launch</span>' : ''}</td>
                <td>${month.visits}</td>
                <td><strong>${formatPercentage(month.avgScore)}</strong></td>
                <td>${formatPercentage(month.highest)}</td>
                <td>${formatPercentage(month.lowest)}</td>
                <td>${index === 0 ? '-' : getChangeIndicator(change)}</td>
                <td>${index === 0 ? '-' : change > 0 ? '↗' : change < 0 ? '↘' : '→'}</td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// ========================================
// SECTION 3: WEEKLY WRAP NEWSLETTER
// ========================================

function initWeeklyWrapSection() {
    const latestWeek = weeklyWrapData[weeklyWrapData.length - 1];
    const previousWeek = weeklyWrapData[weeklyWrapData.length - 2];
    
    // Calculate 2026 average open rate
    const data2026 = weeklyWrapData.filter(w => w.year === 2026);
    const data2025 = weeklyWrapData.filter(w => w.year === 2025);
    const avg2026 = data2026.length > 0 ? calculateAverage(data2026.map(w => w.openRate)) : 0;
    const avg2025 = data2025.length > 0 ? calculateAverage(data2025.map(w => w.openRate)) : 0;
    const yearComparison = avg2025 > 0 ? calculateChange(avg2026, avg2025) : 0;
    
    // Calculate year-over-year comparison (same week last year)
    const sameWeekLastYear = weeklyWrapData.find(w => 
        w.year === latestWeek.year - 1 && 
        w.week === latestWeek.week
    );
    const yoyChange = sameWeekLastYear ? calculateChange(latestWeek.openRate, sameWeekLastYear.openRate) : 0;
    
    // Calculate quarter-over-quarter
    const thisYearData = weeklyWrapData.filter(w => w.year === latestWeek.year);
    const byQuarter = groupByQuarter(thisYearData);
    const quarters = Object.keys(byQuarter).sort();
    const currentQuarter = `${latestWeek.year}-${latestWeek.quarter}`;
    const previousQuarter = quarters[quarters.indexOf(currentQuarter) - 1];
    
    const currentQAvg = previousQuarter ? calculateAverage(byQuarter[currentQuarter].map(w => w.openRate)) : 0;
    const previousQAvg = previousQuarter ? calculateAverage(byQuarter[previousQuarter].map(w => w.openRate)) : 0;
    const qoqChange = previousQuarter ? calculateChange(currentQAvg, previousQAvg) : 0;
    
    // Calculate month-over-month
    const byMonth = groupByMonth(thisYearData);
    const months = Object.keys(byMonth).sort();
    const currentMonth = `${latestWeek.year}-${latestWeek.month}`;
    const previousMonth = months[months.indexOf(currentMonth) - 1];
    
    const currentMAvg = calculateAverage(byMonth[currentMonth].map(w => w.openRate));
    const previousMAvg = previousMonth ? calculateAverage(byMonth[previousMonth].map(w => w.openRate)) : 0;
    const momChange = previousMonth ? calculateChange(currentMAvg, previousMAvg) : 0;
    
    // Update KPI cards
    document.getElementById('weeklyWrapLatestRate').textContent = formatPercentage(avg2026);
    document.getElementById('weeklyWrapLatestChange').innerHTML = getChangeIndicator(yearComparison);
    document.getElementById('weeklyWrapYoYChange').innerHTML = getChangeIndicator(yoyChange);
    document.getElementById('weeklyWrapQoQChange').innerHTML = getChangeIndicator(qoqChange);
    document.getElementById('weeklyWrapMoMChange').innerHTML = getChangeIndicator(momChange);
    
    // Update stats
    const allData = weeklyWrapData;
    
    // Calculate averages for open rate and CTR
    const avgOpenRate = calculateAverage(allData.map(w => w.openRate));
    const avgCTR = calculateAverage(allData.map(w => w.ctr));
    const bestOpenRate = Math.max(...allData.map(w => w.openRate));
    const bestCTR = Math.max(...allData.map(w => w.ctr));
    
    document.getElementById('weeklyWrapAvgOpenRate').textContent = formatPercentage(avgOpenRate);
    document.getElementById('weeklyWrapAvgCTR').textContent = formatPercentage(avgCTR);
    document.getElementById('weeklyWrapBest').textContent = formatPercentage(bestOpenRate);
    document.getElementById('weeklyWrapBestCTR').textContent = formatPercentage(bestCTR);
    document.getElementById('weeklyWrapLatestCTR').textContent = formatPercentage(latestWeek.ctr);
    document.getElementById('weeklyWrapTotalWeeks').textContent = weeklyWrapData.length;
    
    // Render charts
    renderWeeklyWrapTrendChart();
    renderWeeklyWrapYoYChart();
    renderWeeklyWrapQuarterChart();
}

function renderWeeklyWrapTrendChart() {
    const ctx = document.getElementById('weeklyWrapTrendChart');
    
    // Group data by year-month and calculate monthly averages
    const monthlyData = {};
    
    weeklyWrapData.forEach(week => {
        const key = `${week.year}-${week.month}`;
        if (!monthlyData[key]) {
            monthlyData[key] = {
                year: week.year,
                month: week.month,
                openRates: [],
                label: `${week.month} ${week.year}`
            };
        }
        monthlyData[key].openRates.push(week.openRate);
    });
    
    // Calculate averages and sort by date
    const monthlyAverages = Object.keys(monthlyData)
        .sort()
        .map(key => {
            const data = monthlyData[key];
            return {
                label: data.label,
                avgOpenRate: calculateAverage(data.openRates),
                year: data.year,
                month: data.month
            };
        });
    
    // Show last 12 months for better visibility
    const recentMonths = monthlyAverages.slice(-12);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: recentMonths.map(m => m.label),
            datasets: [{
                label: 'Monthly Avg Open Rate',
                data: recentMonths.map(m => m.avgOpenRate),
                borderColor: SUBWAY_GREEN,
                backgroundColor: `${SUBWAY_GREEN}20`,
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 8,
                pointBackgroundColor: SUBWAY_YELLOW,
                pointBorderColor: SUBWAY_GREEN,
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: SUBWAY_GREEN,
                    titleColor: SUBWAY_YELLOW,
                    bodyColor: '#ffffff',
                    borderColor: SUBWAY_YELLOW,
                    borderWidth: 2,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: (context) => `Avg Open Rate: ${context.parsed.y.toFixed(1)}%`
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 30,
                    max: 80,
                    ticks: {
                        callback: (value) => value + '%'
                    },
                    grid: {
                        color: '#e0e0e0'
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function renderWeeklyWrapYoYChart() {
    const ctx = document.getElementById('weeklyWrapYoYChart');
    
    // Get monthly averages for each year
    const data2024 = weeklyWrapData.filter(w => w.year === 2024);
    const data2025 = weeklyWrapData.filter(w => w.year === 2025);
    
    const months2024 = groupByMonth(data2024);
    const months2025 = groupByMonth(data2025);
    
    const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const avgData2024 = monthLabels.map(month => {
        const key = `2024-${month}`;
        return months2024[key] ? calculateAverage(months2024[key].map(w => w.openRate)) : null;
    });
    
    const avgData2025 = monthLabels.map(month => {
        const key = `2025-${month}`;
        return months2025[key] ? calculateAverage(months2025[key].map(w => w.openRate)) : null;
    });
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: monthLabels,
            datasets: [
                {
                    label: '2024',
                    data: avgData2024,
                    backgroundColor: SUBWAY_GREEN,
                    borderColor: SUBWAY_GREEN_DARK,
                    borderWidth: 2
                },
                {
                    label: '2025',
                    data: avgData2025,
                    backgroundColor: SUBWAY_YELLOW,
                    borderColor: SUBWAY_YELLOW_DARK,
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        padding: 20
                    }
                },
                tooltip: {
                    backgroundColor: SUBWAY_GREEN,
                    titleColor: SUBWAY_YELLOW,
                    bodyColor: '#ffffff',
                    borderColor: SUBWAY_YELLOW,
                    borderWidth: 2,
                    padding: 12,
                    callbacks: {
                        label: (context) => context.parsed.y ? `${context.dataset.label}: ${context.parsed.y.toFixed(1)}%` : 'No data'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 30,
                    max: 80,
                    ticks: {
                        callback: (value) => value + '%'
                    },
                    grid: {
                        color: '#e0e0e0'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function renderWeeklyWrapQuarterChart() {
    const ctx = document.getElementById('weeklyWrapQuarterChart');
    
    const byQuarter = groupByQuarter(weeklyWrapData);
    const quarterData = Object.keys(byQuarter).sort().map(key => ({
        quarter: key,
        avgOpenRate: calculateAverage(byQuarter[key].map(w => w.openRate))
    }));
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: quarterData.map(q => q.quarter.replace('-', ' ')),
            datasets: [{
                label: 'Quarterly Average',
                data: quarterData.map(q => q.avgOpenRate),
                borderColor: SUBWAY_YELLOW,
                backgroundColor: `${SUBWAY_YELLOW}30`,
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 6,
                pointHoverRadius: 9,
                pointBackgroundColor: SUBWAY_GREEN,
                pointBorderColor: SUBWAY_YELLOW,
                pointBorderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: SUBWAY_GREEN,
                    titleColor: SUBWAY_YELLOW,
                    bodyColor: '#ffffff',
                    borderColor: SUBWAY_YELLOW,
                    borderWidth: 2,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: (context) => `Avg Open Rate: ${context.parsed.y.toFixed(1)}%`
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 30,
                    max: 80,
                    ticks: {
                        callback: (value) => value + '%'
                    },
                    grid: {
                        color: '#e0e0e0'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// ========================================
// SECTION 4: SMO CONNECT NEWSLETTER
// ========================================

function initSMOConnectSection() {
    const latestMonth = smoConnectData[smoConnectData.length - 1];
    const previousMonth = smoConnectData[smoConnectData.length - 2];
    
    // Calculate 2026 average vs 2025 average
    const data2026 = smoConnectData.filter(m => m.year === 2026);
    const data2025 = smoConnectData.filter(m => m.year === 2025);
    const avg2026 = data2026.length > 0 ? calculateAverage(data2026.map(m => m.openRate)) : 0;
    const avg2025 = data2025.length > 0 ? calculateAverage(data2025.map(m => m.openRate)) : 0;
    const yearComparison = avg2025 > 0 ? calculateChange(avg2026, avg2025) : 0;
    
    // Calculate year-over-year (same month last year)
    const monthName = latestMonth.month.split(' ')[0];
    const sameMonthLastYear = smoConnectData.find(m => 
        m.year === latestMonth.year - 1 && 
        m.month.startsWith(monthName)
    );
    const yoyChange = sameMonthLastYear ? calculateChange(latestMonth.openRate, sameMonthLastYear.openRate) : 0;
    
    // Calculate quarter-over-quarter (keep for potential use)
    const thisYearData = smoConnectData.filter(m => m.year === latestMonth.year);
    const byQuarter = groupByQuarter(thisYearData);
    const quarters = Object.keys(byQuarter).sort();
    const currentQuarter = `${latestMonth.year}-${latestMonth.quarter}`;
    const previousQuarter = quarters[quarters.indexOf(currentQuarter) - 1];
    
    const currentQAvg = calculateAverage(byQuarter[currentQuarter].map(m => m.openRate));
    const previousQAvg = previousQuarter ? calculateAverage(byQuarter[previousQuarter].map(m => m.openRate)) : 0;
    const qoqChange = previousQuarter ? calculateChange(currentQAvg, previousQAvg) : 0;
    
    // Calculate month-over-month
    const momChange = calculateChange(latestMonth.openRate, previousMonth.openRate);
    
    // Update KPI cards
    document.getElementById('smoConnectLatestRate').textContent = formatPercentage(latestMonth.openRate);
    document.getElementById('smoConnectLatestChange').innerHTML = getChangeIndicator(momChange);
    document.getElementById('smoConnectYoYChange').innerHTML = getChangeIndicator(yoyChange);
    document.getElementById('smoConnectQoQChange').textContent = formatPercentage(avg2026); // Show 2026 average
    document.getElementById('smoConnect2026Change').innerHTML = getChangeIndicator(yearComparison); // Show vs 2025
    document.getElementById('smoConnectMoMChange').textContent = formatPercentage(avg2025); // Show 2025 average
    
    // Update stats
    const thisYear = smoConnectData.filter(m => m.year === 2025);
    const lastYear = smoConnectData.filter(m => m.year === 2024);
    
    document.getElementById('smoConnectThisYearAvg').textContent = formatPercentage(calculateAverage(thisYear.map(m => m.openRate)));
    document.getElementById('smoConnectLastYearAvg').textContent = formatPercentage(calculateAverage(lastYear.map(m => m.openRate)));
    document.getElementById('smoConnectBest').textContent = formatPercentage(Math.max(...smoConnectData.map(m => m.openRate)));
    document.getElementById('smoConnectTotalMonths').textContent = smoConnectData.length;
    
    // Render charts
    renderSMOConnectTrendChart();
    renderSMOConnectYoYChart();
    renderSMOConnectQuarterChart();
}

function renderSMOConnectTrendChart() {
    const ctx = document.getElementById('smoConnectTrendChart');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: smoConnectData.map(m => m.month),
            datasets: [{
                label: 'Open Rate',
                data: smoConnectData.map(m => m.openRate),
                borderColor: SUBWAY_YELLOW,
                backgroundColor: `${SUBWAY_YELLOW}20`,
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 8,
                pointBackgroundColor: SUBWAY_GREEN,
                pointBorderColor: SUBWAY_YELLOW,
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: SUBWAY_GREEN,
                    titleColor: SUBWAY_YELLOW,
                    bodyColor: '#ffffff',
                    borderColor: SUBWAY_YELLOW,
                    borderWidth: 2,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: (context) => `Open Rate: ${context.parsed.y.toFixed(1)}%`
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 35,
                    max: 75,
                    ticks: {
                        callback: (value) => value + '%'
                    },
                    grid: {
                        color: '#e0e0e0'
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function renderSMOConnectYoYChart() {
    const ctx = document.getElementById('smoConnectYoYChart');
    
    const data2025 = smoConnectData.filter(m => m.year === 2025);
    const data2026 = smoConnectData.filter(m => m.year === 2026);
    
    const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const rates2025 = monthLabels.map(month => {
        const found = data2025.find(m => m.month.startsWith(month));
        return found ? found.openRate : null;
    });
    
    const rates2026 = monthLabels.map(month => {
        const found = data2026.find(m => m.month.startsWith(month));
        return found ? found.openRate : null;
    });
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: monthLabels,
            datasets: [
                {
                    label: '2025',
                    data: rates2025,
                    backgroundColor: SUBWAY_GREEN,
                    borderColor: SUBWAY_GREEN_DARK,
                    borderWidth: 2
                },
                {
                    label: '2026',
                    data: rates2026,
                    backgroundColor: SUBWAY_YELLOW,
                    borderColor: SUBWAY_YELLOW_DARK,
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        padding: 20
                    }
                },
                tooltip: {
                    backgroundColor: SUBWAY_GREEN,
                    titleColor: SUBWAY_YELLOW,
                    bodyColor: '#ffffff',
                    borderColor: SUBWAY_YELLOW,
                    borderWidth: 2,
                    padding: 12,
                    callbacks: {
                        label: (context) => context.parsed.y ? `${context.dataset.label}: ${context.parsed.y.toFixed(1)}%` : 'No data'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 35,
                    max: 75,
                    ticks: {
                        callback: (value) => value + '%'
                    },
                    grid: {
                        color: '#e0e0e0'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function renderSMOConnectQuarterChart() {
    const ctx = document.getElementById('smoConnectQuarterChart');
    
    const byQuarter = groupByQuarter(smoConnectData);
    const quarterData = Object.keys(byQuarter).sort().map(key => ({
        quarter: key,
        avgOpenRate: calculateAverage(byQuarter[key].map(m => m.openRate))
    }));
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: quarterData.map(q => q.quarter.replace('-', ' ')),
            datasets: [{
                label: 'Quarterly Average',
                data: quarterData.map(q => q.avgOpenRate),
                borderColor: SUBWAY_GREEN,
                backgroundColor: `${SUBWAY_GREEN}30`,
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 6,
                pointHoverRadius: 9,
                pointBackgroundColor: SUBWAY_YELLOW,
                pointBorderColor: SUBWAY_GREEN,
                pointBorderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: SUBWAY_GREEN,
                    titleColor: SUBWAY_YELLOW,
                    bodyColor: '#ffffff',
                    borderColor: SUBWAY_YELLOW,
                    borderWidth: 2,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: (context) => `Avg Open Rate: ${context.parsed.y.toFixed(1)}%`
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 35,
                    max: 75,
                    ticks: {
                        callback: (value) => value + '%'
                    },
                    grid: {
                        color: '#e0e0e0'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// ========================================
// NAVIGATION & INITIALIZATION
// ========================================

/**
 * Handle navigation link clicks - Tab-based navigation
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.dashboard-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            
            // Get target section ID from href
            const targetId = link.getAttribute('href').substring(1);
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Show target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
                
                // Smooth scroll to top of main content area
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Update last updated timestamp
 */
function updateTimestamp() {
    const now = new Date();
    const formatted = now.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    document.getElementById('lastUpdated').textContent = formatted;
}

/**
 * Initialize dashboard on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('🥖 Initializing Subway® Comms Metrics Dashboard...');
    
    // Update timestamp
    updateTimestamp();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize all sections
    initTrainingSection();
    initRestaurantSection();
    initWeeklyWrapSection();
    initSMOConnectSection();
    
    console.log('✅ Dashboard initialized successfully!');
});
