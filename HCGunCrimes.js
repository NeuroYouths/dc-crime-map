$(function () {
    Highcharts.setOptions({
        chart: {
			backgroundColor: '#ddd',
            style: {
                fontFamily: 'Arial'
            }
        }
    });
        $('#HCGunCrimes').highcharts({
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
                categories: ['2007','2008','2009','2010','2011','2012','2013']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of Gun Crimes',
                    style: {
					fontSize: '15px',
					fontWeight: 'bold',
                    color: '#4c4c4c'
					},
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                shared: false
            },
            legend: {
            borderWidth: 0,
                itemStyle: {
                    color: '#4c4c4c'   
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
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
                name: 'Homicide',
                color: '#F92D28',    
                data: [140,137,108,97,76,55,24]
            }, {
                name: 'Assault w/Dangerous Weapon',
                color: '#f9a52f',
                data: [863,736,679,601,497,557,205]
            },{
                name: 'Robbery',
                color: '#F9D728',
                data: [1493,1347,1426,1134,1258,1479,563]
            }]
        });
    });