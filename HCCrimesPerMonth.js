$(function () {
    Highcharts.setOptions({
        chart: {
			backgroundColor: '#ddd',
            style: {
                fontFamily: 'Arial'
            }
        }
    });
        $('#HCCrimesPerMonth').highcharts({
            title: {
                text: '',
            },
			navigation: {
            buttonOptions: {
                enabled: false
            }
        },
            plotOptions: {
            series: {
                marker: {
                    radius: 3
                }
            }
        },

            xAxis: {
                labels: {
                rotation: 90,
                    step: 3,
                    y: 20
            },
                categories: ['Jan07', 'Feb07', 'Mar07', 'Apr07', 'May07', 'Jun07', 'Jul07', 'Aug07', 'Sep07', 'Oct07', 'Nov07', 'Dec07','Jan08', 'Feb08', 'Mar08', 'Apr08', 'May08', 'Jun08', 'Jul08', 'Aug08', 'Sep08', 'Oct08', 'Nov08', 'Dec08','Jan09', 'Feb09', 'Mar09', 'Apr09', 'May09', 'Jun09', 'Jul09', 'Aug09', 'Sep09', 'Oct09', 'Nov09', 'Dec09','Jan10', 'Feb10', 'Mar10', 'Apr10', 'May10', 'Jun10', 'Jul10', 'Aug10', 'Sep10', 'Oct10', 'Nov10', 'Dec10','Jan11', 'Feb11', 'Mar11', 'Apr11', 'May11', 'Jun11', 'Jul11', 'Aug11', 'Sep11', 'Oct11', 'Nov11', 'Dec11','Jan12', 'Feb12', 'Mar12', 'Apr12', 'May12', 'Jun12', 'Jul12', 'Aug12', 'Sep12', 'Oct12', 'Nov12', 'Dec12','Jan13', 'Feb13', 'Mar13', 'Apr13', 'May13', 'Jun13', 'Jul13', 'Aug13', 'Sep13', 'Oct13', 'Nov13', 'Dec13']
            },
            yAxis: {
                title: {
                    text: 'Number of Crimes',
                    style: {
					fontSize: '15px',
					fontWeight: 'bold',
                    color: '#4c4c4c'
					},
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            legend: {
            enabled: false
        },
            credits: {
            enabled: false
        },
            series: [{
                name: 'Crimes',
                color: '#5698D0',
                data: [2866,2002,2579,2904,3130,3101,3163,3169,2914,3154,2930,2680,2715,2521,2603,2727,3061,3122,3350,3071,2897,3132,2799,2745,2774,2471,2536,2716,3111,3169,3181,3144,2879,2874,2570,2160,2136,1485,2360,2522,2800,2782,2963,2943,2875,2906,2689,2428,2276,2154,2593,2454,2863,3008,3053,3013,2985,3302,3043,3091,3008,2345,2504,2566,2940,2987,3219,3414,3072,3292,2894,2977,2811,2228,2455,2638,3136,3066,3058,3254,3322,3239,2795,2854]
            }]
        });
    });
    
