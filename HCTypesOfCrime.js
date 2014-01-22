$(function () {
    Highcharts.setOptions({
        chart: {
			backgroundColor: '#ddd',
            style: {
                fontFamily: 'Arial'
            }
        }
    });
        $('#HCTypesOfCrime').highcharts({
            chart: {
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['2007','2008','2009','2010','2011','2012','2013']
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
            },
             navigation: {
            buttonOptions: {
                enabled: false
                }
            },
            legend: {
            borderWidth: 0,
                itemStyle: {
                    color: '#4c4c4c'   
                }
            },
            credits: {
            enabled: false
        },
             plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },
           tooltip: {
                formatter: function() {
                    return '<b>'+ this.x +'</b><br/>'+
                        this.series.name +': '+ this.y;
                }
            },
            
            series: [{
                type: 'column',
                name: 'Homicide',
                color: '#F92D28',
                data: [177,183,144,129,108,88,104]
            }, {
                type: 'column',
                name: 'Sex Abuse',
                color: '#C21F85',
                data: [398,412,368,140,169,245,290]
            }, {
                type: 'column',
                name: 'ADW',
                color: '#f9a52f',
                data:         [3160,2824,2588,2561,2174,2290,2284]
            },{
                type: 'column',
                name: 'Robbery',
                color: '#F9D728',
                data: [4411,4360,4356,3949,4136,4241,4042]
            },{
                type: 'column',
                name: 'Burglary',
                color: '#B7EC25',
                data: [3941,3717,3635,4160,3944,3676,3336]
            },{
                type: 'column',
                name: 'Arson',
                color: '#1FC42A',
                data: [51,47,58,43,44,36,34]
            },{
                type: 'column',
                name: 'Theft from Vehicle',
                color: '#4BCACA',
                data: [7724,8899,8482,6898,9148,9439,9742]
            },{
                type: 'column',
                name: 'Theft',
                color: '#5698D0',
                data: [8794,9079,9194,8964,10755,12360,12382]
            },{
                type: 'column',
                name: 'Motor Vehicle Theft',
                color: '#9159D4',
                data: [5936,5222,4760,4045,3357,2843,2642]
            }, {
                type: 'spline',
                name: 'Violent Crime',
                color: '#333',
                data: [8146,7779,7456,6779,6587,6864,6720],
                marker: {
                	lineWidth: 2,
                	lineColor: '#333',
                	fillColor: 'white'
                }
            },{
                type: 'spline',
                name: 'Non-violent Crime',
                color: '#555',
                data: [26446,26964,26129,24110,27248,28354,28136],
                marker: {
                	lineWidth: 2,
                	lineColor: '#555',
                	fillColor: 'white'
                }
             }]
        });
    });
    
