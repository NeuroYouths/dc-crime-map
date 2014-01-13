$(function () {
    Highcharts.setOptions({
        chart: {
			backgroundColor: '#ddd',
            style: {
                fontFamily: 'Arial'
            }
        }
    });
        $('#HCTimeOfDay').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: '',
                style: {
					fontSize: '24px',
					fontWeight: 'bold',
					color: '#4c4c4c'
					}
            },
            xAxis: {
                categories: ['2011','2012','2013']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Percent',
                    style: {
					fontSize: '15px',
					fontWeight: 'bold',
                    color: '#4c4c4c'
					},
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                shared: true
            },
            legend: {
            borderWidth: 0,
                itemStyle: {
                    color: '#4c4c4c'   
                }
            },
            plotOptions: {
                column: {
                    stacking: 'percent'
                }
            },
            navigation: {
            buttonOptions: {
                enabled: false
                }
            },
            credits: {
            enabled: false
            },
                series: [{
                name: 'Evening',
                color: '#9159D4',    
                data: [11650,11362,4585]
            }, {
                name: 'Afternoon',
                color: '#5698D0',
                data: [10798,11441,4277]
            },{
                name: 'Mid-Morning',
                color: '#4BCACA',
                data: [7662,9014,3198]
            },{
                name: 'Early Morning',
                color: '#1FC42A',
                data: [3725,3401,1208]
            }]
        });
    });