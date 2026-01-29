import { computed } from 'vue';

/**
 * Composable for chart configuration
 * @param {Object} moduleRef - Reactive reference to the module data
 * @param {Object} options - Configuration options
 * @param {number} options.maxTicksLimit - Maximum number of ticks on x-axis (default: 6)
 * @param {number} options.fontSize - Font size for tick labels (default: 9)
 * @param {boolean} options.showDollarSign - Whether to show $ on y-axis (default: false)
 * @returns {Object} Chart data and options computed properties
 */
export function useChartConfig(moduleRef, options = {}) {
    const {
        maxTicksLimit = 6,
        fontSize = 9,
        showDollarSign = false
    } = options;

    const lineChartData = computed(() => {
        const module = moduleRef.value;
        if (!module?.chart) {
            return { labels: [], datasets: [] };
        }

        const change = typeof module.percentChange === 'number' ? module.percentChange : 0;
        const isPositive = change > 0;

        return {
            labels: module.labels,
            datasets: [{
                data: module.chart,
                fill: true,
                borderColor: isPositive ? '#22c55e' : '#ef4444',
                tension: 0.4,
                backgroundColor: isPositive ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                pointRadius: 0
            }]
        };
    });

    const lineChartOptions = computed(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
        const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

        return {
            maintainAspectRatio: false,
            plugins: { 
                legend: { display: false } 
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        maxTicksLimit,
                        font: { size: fontSize }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary,
                        callback: (value) => showDollarSign ? `$${value.toFixed(2)}` : Math.round(value),
                        padding: 5,
                        font: { size: fontSize }
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    });

    return {
        lineChartData,
        lineChartOptions
    };
}
