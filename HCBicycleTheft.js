$(function () {
    Highcharts.setOptions({
        chart: {
			backgroundColor: '#ddd',
            style: {
                fontFamily: 'Arial'
            }
        }
    });
        $('#HCBicycleTheft').highcharts({
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
                  
                    y: 20
            },
                categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
            },
            yAxis: {
                title: {
                    text: 'Number of Bicycle Thefts',
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
                name: 'Stolen Bicycles',
                color: '#5698D0',
                data: [119,83,139,165,206,316,393,298,310,227,119,69]
            }]
        });
    });
    
